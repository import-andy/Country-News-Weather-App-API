import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //  Added for ngModel support
import { CommonModule } from '@angular/common'; // Added for *ngFor support

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, // Added
    CommonModule // Added
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
