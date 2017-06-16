import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { VentaComponent } from './venta/venta.component';

import {VentaModule} from './venta/venta.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
