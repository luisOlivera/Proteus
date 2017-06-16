import { Injectable } from '@angular/core';
import { Producto }  from './class';

@Injectable()
export class VentaService {

  constructor() { }

  listaProductos():Producto[]{
    return [
      new Producto(111,"Hola 1",60,100),
      new Producto(222,"Hola 2",70,90),
      new Producto(333,"Hola 3",80,80),
      new Producto(444,"Hola 4",90,70),
      new Producto(555,"Hola 5",100,60)
    ];
  }  

}
