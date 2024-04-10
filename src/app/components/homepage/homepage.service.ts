import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  , BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private chatGPDKeySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  chatGPDKey$: Observable<string> = this.chatGPDKeySubject.asObservable();
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  constructor(private http: HttpClient) { }

  // TO GET THE CHAT RESPONSE OF THE APPLICATION API
  getResponse(prompt: string,key: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    });
    const body = {
      'model':"gpt-3.5-turbo",
      'messages': [{"role": "user", "content": prompt}],
      'max_tokens': 150
    };

    return this.http.post<any>(this.apiUrl, body, { headers: headers });
  }
  // TO GET THE CHAT RESPONSE OF THE APPLICATION API


  // TO STORE THE CHATGPT KEY IN SUBJECT TO USE IT
  setChatGPDKey(chatGPDKey: string): void {
    this.chatGPDKeySubject.next(chatGPDKey);
    sessionStorage.setItem('chatGPDKey', chatGPDKey);
  }
  // TO STORE THE CHATGPT KEY IN SUBJECT TO USE IT

  // TO GET THE CHATGPT KEY IN SUBJECT TO USE IT
  getChatGPDKey(): Observable<string> {
    return this.chatGPDKey$;
  }
  // TO GET THE CHATGPT KEY IN SUBJECT TO USE IT
}
