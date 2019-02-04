import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
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
 entryComponents: [SliderComponent],
})
export class AppModule {
 constructor(private injector: Injector) {
   const slider = createCustomElement(SliderComponent, { injector });
   customElements.define('motley-slider', slider);
 }

 ngDoBootstrap() {}

}
