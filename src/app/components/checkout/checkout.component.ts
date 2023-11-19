import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { AppConfigServiceService } from 'src/app/shared/app-config-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit{

  checkoutForm!: FormGroup;
  carrito: any[] = [];
  totalCarrito!: number;
  client: Client[] = [];
  config: any;

  constructor(private formBuilder: FormBuilder, private cartService: CartService, private router: Router, private AppConfigService: AppConfigServiceService){ }

  ngOnInit(): void {
      this.carrito = this.cartService.obtenerCarrito();
      this.totalCarrito = this.cartService.calcularTotal();
      this.client = this.cartService.obtenerCliente();
      this.config = this.AppConfigService.initializeApp();

      this.checkoutForm = this.formBuilder.group({
        idClient: [null], // ID inicializado como null o con un valor predeterminado
        name: [this.client[0]?.name ||'', Validators.required],
        lastName: [ this.client[0]?.lastName ||'', Validators.required],
        email: [this.client[0]?.email ||'', [Validators.required, Validators.email]], // Valida un formato de email
        address: [this.client[0]?.address ||'', Validators.required],
        phone: [this.client[0]?.phone ||'', [Validators.required]], // Ejemplo de validación de teléfono
      })
  } 

  onSubmit() {
    console.log("ejecucando this.config desde onSubmit()", this.config)
    console.log("Intentando enviar el formulario...");
    //Si el ID es null, se está creando un nuevo cliente
    if (!this.checkoutForm.get('idClient')?.value ) {
      this.checkoutForm.get('idClient')?.setValue(this.generateUniqueId());
      console.log('es Null generando nuevo idClient', this.checkoutForm.get('idClient')?.value)
    }

    if (this.checkoutForm.valid) {
      // Preparar y enviar los datos del pedido
      const idCliente = this.checkoutForm.get('idClient')?.value;
      const nombreCliente = this.checkoutForm.get('name')?.value; 
      const apellidoCliente = this.checkoutForm.get('lastName')?.value; 
      const emailCliente = this.checkoutForm.get('email')?.value; 
      const addressCliente = this.checkoutForm.get('address')?.value;
      const phoneCliente = this.checkoutForm.get('phone')?.value;
      
      this.cartService.agregarCliente({
        idClient: idCliente,
        name: nombreCliente,
        lastName: apellidoCliente,
        email: emailCliente,
        address: addressCliente,
        phone: phoneCliente,
      })
    }
    this.router.navigate(['/confirm-checkout']);
  }

  generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  eliminarProducto(indice: number) {
    // Elimina el producto en el índice dado
    this.carrito.splice(indice, 1);
  }

  get calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  }  
}
