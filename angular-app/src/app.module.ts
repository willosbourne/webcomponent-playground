import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';
import { AppComponent } from './app.component';
import { CustomPlatformLocation } from './platform-location';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: PlatformLocation, useClass: CustomPlatformLocation }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // This allows Angular to recognize custom elements
})
export class AppModule { }
