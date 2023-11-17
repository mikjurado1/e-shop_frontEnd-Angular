import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';

import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeblogComponent } from './components/homeblog/homeblog.component';
import { BlogsectionComponent } from './components/blogsection/blogsection.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopingCartFormComponent } from './components/shoping-cart-form/shoping-cart-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartDisplayComponent } from './components/shopping-cart-display/shopping-cart-display.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmCheckoutComponent } from './components/confirm-checkout/confirm-checkout.component';
import { PaymentSucessComponent } from './components/payment-sucess/payment-sucess.component';
import { PaymentFailComponent } from './components/payment-fail/payment-fail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ProductComponent,
    MainComponent,
    BlogComponent,
    ShopComponent,
    HomepageComponent,
    ProductDetailComponent,
    CursosComponent,
    HomeblogComponent,
    BlogsectionComponent,
    BlogDetailComponent,
    FooterComponent,
    NavbarComponent,
    ShopingCartFormComponent,
    ShoppingCartDisplayComponent,
    CheckoutComponent,
    ConfirmCheckoutComponent,
    PaymentSucessComponent,
    PaymentFailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
