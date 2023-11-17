import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];
  private clientes: any[] = [];

  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);
    console.log(this.carrito)

  }

  agregarCliente(cliente: any) { 
    this.clientes = [];       
    this.clientes.push(cliente);
  }
 
  obtenerCarrito() {
    return this.carrito;
  }

  obtenerCliente(){
    return this.clientes;
  }

  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }
}
