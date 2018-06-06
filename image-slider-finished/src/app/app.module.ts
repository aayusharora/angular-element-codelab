import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    BrowserModule
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
