import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { WebCompComponent } from './web-comp/web-comp.component';

@NgModule({
  declarations: [
    WebCompComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [WebCompComponent],
  bootstrap: [WebCompComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(WebCompComponent, { injector });
    customElements.define('web-comp', el);
  }
  ngDoBootstrap(){}
}
