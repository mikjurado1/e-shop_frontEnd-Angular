import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/shared/cart.service';


@Component({
  selector: 'app-shoping-cart-form',
  templateUrl: './shoping-cart-form.component.html',
  styleUrls: ['./shoping-cart-form.component.css']
})

export class ShopingCartFormComponent implements OnInit {

   // Formulario
   cartForm!: FormGroup;
   productos: Product[]=[];
   

   constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private cartService: CartService

  ){}

   ngOnInit(): void {
    this.productos = this.productService.getProducts();
    this.cartForm = this.formBuilder.group({
      // configuración de tu formulario
      productID: [0, Validators.required],
      api_id: ['0', Validators.required ],
      productName: ['', Validators.required],
      quantity: [1,  [Validators.required, Validators.min(1), Validators.max(5)]],
      price: [0, Validators.required]
    });
   }

  
   onSubmit(){
    if (this.cartForm.valid) {
      const productID = this.cartForm.get('productName')?.value;
      const cantidad = this.cartForm.get('quantity')?.value;
      const productoEncontrado = this.productos.find(p => p.idProduct == productID);
      console.log(productID, productoEncontrado?.api_id, productoEncontrado?.title, cantidad, productoEncontrado?.price )
      this.cartService.agregarAlCarrito({
        productID: productID,
        api_id:productoEncontrado?.api_id,
        productName: productoEncontrado?.title,
        quantity: cantidad,
        price: productoEncontrado?.price
      });     
    }
   }

}
