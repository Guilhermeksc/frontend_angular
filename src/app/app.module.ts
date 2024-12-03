import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  bootstrap: [] // Se estiver usando standalone components, não precisa declarar bootstrap aqui.
})
export class AppModule {}
