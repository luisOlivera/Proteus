import { Component, OnInit } from '@angular/core';
import { VentaService } from './venta.service'; 
import { Producto } from './class';

@Component({
  selector: 'venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  isCosto:boolean = true;

  productos:Producto[]=[];

  constructor(private ventaService:VentaService) {

  }

  ngOnInit() {

    this.productos = this.ventaService.listaProductos();

    this.productos.map(p=>console.log(p.Nombre));



    //console.log(productos);

    /**
     * console.log(this.productos);

    let nombres = this.productos.map(p => p.nombre);

    console.log(nombres);

    let menores = this.productos.filter(p => p.costo<70);

    console.log(menores);

    let numeros = [1,2,3,4,5];

    let reduces = numeros.reduce((ant,act)=>ant+act);


    console.log(numeros.reduce(function(ant,act){
      console.log(ant+" "+act);
      return ant+act;
    }));
     */
    

  }

  teclear(){
    console.log("Tecleando...");
  }


}
