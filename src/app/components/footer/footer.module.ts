

// Import necessary Angular modules and dependencies
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    FooterComponent
  ],
})
// Define the module class
export class FooterModule { }
