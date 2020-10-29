import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

