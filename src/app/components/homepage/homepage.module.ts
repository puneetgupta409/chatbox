

// Import necessary Angular modules and dependencies
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Include FormsModule here
    PickerModule, // EMOJI MODULE
    FooterModule,
    DialogModule, // SHOW CHATGPT KEY MODAL POPUP
    ToastModule // SHOW ERROR OR SUCCESS MESSAGE
  ],
  providers: [
    HomepageService,
    MessageService // TOAST SERVICE TO SHOW ERORR AND SUCCESS
  ],
})
// Define the module class
export class HomepageModule { }
