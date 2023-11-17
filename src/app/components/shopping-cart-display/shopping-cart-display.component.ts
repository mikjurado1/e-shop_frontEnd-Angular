import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shopping-cart-display',
  templateUrl: './shopping-cart-display.component.html',
  styleUrls: ['./shopping-cart-display.component.css']
})
export class ShoppingCartDisplayComponent implements OnInit {
  carrito: any[] = [];
 
  constructor(private cartService: CartService, private router: Router) {}
  
  ngOnInit() {
    this.carrito = this.cartService.obtenerCarrito();
    // Imprimir el carrito en la consola
    
  }

  eliminarProducto(indice: number) {
    // Elimina el producto en el índice dado
    this.carrito.splice(indice, 1);
  }

  get calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }

 
  irACheckout(){
    this.router.navigate(['/checkout']);
  }

 
  
}
