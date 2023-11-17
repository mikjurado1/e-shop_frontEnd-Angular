import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Router } from '@angular/router';
import { PagoServiceService } from 'src/app/shared/pago-service.service';

declare var Stripe: any; // Esto es necesario para usar Stripe.js en TypeScript

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrls: ['./confirm-checkout.component.css']
})
export class ConfirmCheckoutComponent implements OnInit {

  carrito: any[] = [];
  cliente: any[] = [];

  constructor(
    private cartService: CartService,     
    private pagoService: PagoServiceService, // Inyecta el servicio de pago
    private router: Router){}

  ngOnInit(): void {
      this.carrito = this.cartService.obtenerCarrito();
      this.cliente = this.cartService.obtenerCliente();
      
  }

  get calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }

  payCart(){

    // this.pagoService.crearPing("Hola desde Angular").subscribe(response => {
    //   console.log(response);
    // });

    this.pagoService.crearSesionStripe(this.carrito) // Suponiendo que carrito es un array de Product
    .subscribe({
      next: (response: any) => {
        
        if(response) {
          window.location.href = response.sessionURL;
        }
      },
      error: (error) => {
        console.error('Error al crear sesión de Stripe:', error);
      }
    });
  }
  
  backPage(){    
    this.router.navigate(['/checkout']);
  }
 
}
