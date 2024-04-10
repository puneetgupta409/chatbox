// Import necessary Angular modules and dependencies
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Ensure correct path
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HomepageModule } from './components/homepage/homepage.module';
import { AppService } from './app.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HomepageModule,
    AppRoutingModule,
    HttpClientModule,
    ],
  bootstrap: [AppComponent],
  providers: [AppService],

})
// Define the module class
export class AppModule {
 }


 