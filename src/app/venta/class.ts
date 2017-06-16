export class Producto{

    private _codigo;
    private _nombre;
    private _costo;
    private _precio;

    constructor(codigo:number,nombre:string,costo:number,precio:number){
        this._codigo = codigo;
        this._nombre = nombre;
        this._costo = costo;
        this._precio = precio;
    }

    get Codigo():number{return this._codigo;}
    get Nombre():string{return this._nombre;}
    get Costo():number{return this._costo;}
    get Precio():number{return this._precio;}

    set Codigo(codigo:number){this._codigo = codigo}
    set Nombre(nombre:string){this._nombre = nombre}
    set Costo(costo:number){this._costo = costo}
    set Precio(precio:number){this._precio = precio}

}

export class Venta{
    private _productos:VentaProducto[];//VentaProducto
    private _total;

    constructor(){
        this._productos = [];
        this._total = 0;
    }

    buscar(nombre:string){
        return this._productos.filter(p => p.Producto.Nombre === nombre)[0];
    }//buscar Producto

    agregar(ventaproducto:VentaProducto){
        let p = this.buscar(ventaproducto.Producto.Nombre);
        if(p === undefined){
            this._productos.push(ventaproducto);
        }else{
            let i = this._productos.indexOf(p);
            this._productos[i].Cantidad  += ventaproducto.Cantidad;
        }
    }//agregar producto si existe sumar cantidad

    quitar(nombre:string){
        let p = this._productos.filter(p => p.Producto.Nombre !== nombre);
        this._productos = p;
    }//quitar de la ventaproducto de la lista

    limpiar(){
         this._productos = [];
    }//vaciar la venta

    calcularTotal(){
       let sbt = this._productos.map(p => p.SubTotal);
       return sbt.reduce((ant,act) => ant+act);
    }//sumar los subtotales de la ventaproducto
}


export class VentaProducto{
    private _producto;//Producto
    private _cantidad;
    private _subtotal;

    constructor(producto:Producto,cantidad:number,subtotal:number){
        this._producto = producto;
        this._cantidad = cantidad;
        this._subtotal = subtotal;
    }

    get Producto():Producto{return this._producto;}
    get Cantidad():number{return this._cantidad;}
    get SubTotal():number{return this._subtotal;}

    set Producto(producto:Producto){this._producto=producto;}
    set Cantidad(cantidad:number){this._cantidad=cantidad;}
    set SubTotal(subtotal:number){this._subtotal=subtotal;}

}