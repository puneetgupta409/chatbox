import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { HomepageService } from './homepage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

// INTERFACE TO USE FOR SHOWING MESSAGE IN HTML.
interface Message {
    sent?: string;
    receive?: any;
}

@Component({
    selector: 'app-homepage', // HTML selector for using this component
    templateUrl: './homepage.component.html', // Path to the component's HTML template file
    styleUrls: ['./homepage.component.scss'], // Path to the component's CSS styles file
})

// Define the component class
export class HomepageComponent implements OnInit, OnDestroy {
    @ViewChild('scrollTo') scrollToElement: ElementRef | undefined;
    @ViewChild('scrollToBottomElement') scrollToBottomElement: ElementRef<HTMLElement> | undefined;
    protected openChatBoxModal = false;
    protected placeholderText: string = '';
    protected message: string = '';
    protected intervalId: any;
    protected showEmojiPicker: boolean = false;
    protected messageArray: Message[] = [];
    protected visible: boolean = false;
    protected chatGPDKey: string | null = null;
    protected errorkey: string = '';
    protected showTyping: boolean = false;
    protected defaultMessageArray: any = [
        {
            message: 'Hey everyone 👋'
        },
        {
            message: 'Ready! 😎'
        },
        {
            message: 'Hello from india 🇨🇮'
        },
    ];
    constructor(private renderer: Renderer2, protected homeService: HomepageService, private messageService: MessageService) { }
    ngOnDestroy(): void {

    }

    ngOnInit(): void {
        // TO GET THE CHATGPD KEY TO SEND IN THE API
        this.homeService.getChatGPDKey().subscribe(chatGPDKey => {
            if(chatGPDKey){
                this.chatGPDKey = chatGPDKey;
                this.visible = false;
            } else {
                this.visible = true;
            }
          });
        if(sessionStorage.getItem('chatGPDKey')){
            this.chatGPDKey = sessionStorage.getItem('chatGPDKey');
            this.visible = false;
        }   else {
            this.visible = true;
        }
    }

    // TO OPEN THE CHATBOT.
    openChatBox() {
        this.openChatBoxModal = !this.openChatBoxModal;
        this.placeholderText = '';
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        if (this.openChatBoxModal) {
            this.typePlaceholder('Type your message here...', 100);
        }
    }

    // TO SHOW THE TYPE YOUR MESSAGE  SOME LIKE ANIMATION THAT WHY I USED THIS
    typePlaceholder(text: string, speed: number) {
        let index = 0;
        this.intervalId = setInterval(() => {
            if (index < text.length) {
                this.placeholderText += text.charAt(index);
                index++;
            } else {
                clearInterval(this.intervalId);
            }
        }, speed);
    }

    // ADD EMOJI IN THE MESSAGE I USE THIS MODULE
    addEmoji(event: any) {
        const { message } = this;
        const text = `${message}${event.emoji.native}`;
        this.message = text;
    }

    // OPEN SMILEY BOX MODULE.
    openSmileyBox() {
        this.showEmojiPicker = !this.showEmojiPicker;
    }

    // SEND MESSAGE TO THE CHATGPT 
    sendMessage() {
        if (this.chatGPDKey === '') {
            this.errorkey = 'Please enter a CHATGPT key';
            setTimeout(() => {
                this.errorkey = '';
            }, 3000);
            return;
        }
        if (this.message.trim() === '') return;
        this.messageArray.push(
            {
                sent: this.message
            }
        )
        this.showTyping = true;
        this.scrollToFunction();
        this.getChatResponseApi();
        this.message = '';
    }

    // SCROLL DOWN WHEN USER SEND THE MESSAGE AND I WANT TO COME DOWN TO PARTICULAR MESSSAGE 
    scrollToFunction() {
        setTimeout(() => {
            if (this.scrollToElement && this.scrollToElement.nativeElement && this.scrollToBottomElement && this.scrollToBottomElement.nativeElement) {
                this.scrollToElement.nativeElement.scrollTop = this.scrollToBottomElement.nativeElement.offsetTop;
            }
        });
    }

    // WHEN CHAT IS EMPTY YOU SELECT PARTICULAR MESSAGE TO SEND THEN THIS FUNCTION HIT
    selectMessage(message: string) {
        this.messageArray.push({ sent: message });
        this.getChatResponseApi(message);
        this.message = '';
    }

    // SEND MESSAGE TO THE CHATGPT  API AND GET RESPONSE AND SHOW IT IN BOX
    getChatResponseApi(message?: string) {
        if (message) {
            this.message = message;
        }
        this.homeService.getResponse(this.message, this.chatGPDKey).subscribe(
            (response) => {
                if (response && response.choices && response.choices.length) {
                    this.messageArray.push({
                        receive: response.choices[0].message.content,
                    });
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'No response received from the API.',
                    });
                }
                this.showTyping = false;
            },
            (error: HttpErrorResponse) => {
                if (error.error && error.error.error.type === 'insufficient_quota') {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'You exceeded your current quota. Please check your plan and billing details.',
                    });
                } else {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'An unexpected error occurred. Please try again later.',
                    });

                }
                this.showTyping = false;
            }
        );
    }

    // SUBMIT THE CHATGPT KEY AND STORE IN THE STORE AND USE THE KEY.
    submitCHATGPTkey() {
        if (this.chatGPDKey && this.chatGPDKey.trim() === '') {
            this.errorkey = 'Please enter a CHATGPT key';
            setTimeout(() => {
                this.errorkey = '';
            }, 3000);
            return;
        }
        if(this.chatGPDKey)
        this.homeService.setChatGPDKey(this.chatGPDKey);
        this.visible = false;
    }
}