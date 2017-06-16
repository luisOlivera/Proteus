import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VentaComponent } from './venta.component';
import { VentaService } from './venta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VentaComponent], //declaracion de componente
  exports :[VentaComponent],
  providers : [VentaService] // Servicios Proveedores
})

export class VentaModule { }
