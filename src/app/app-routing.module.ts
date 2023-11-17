import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmCheckoutComponent } from './components/confirm-checkout/confirm-checkout.component';
import { PaymentSucessComponent } from './components/payment-sucess/payment-sucess.component';
import { PaymentFailComponent } from './components/payment-fail/payment-fail.component';

const routes: Routes=[
  {path: '', component:HomepageComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'productDetail/:id', component:ProductDetailComponent},
  {path: 'blogDetail/:id', component:BlogDetailComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'confirm-checkout', component:ConfirmCheckoutComponent},
  {path: 'payment-success', component:PaymentSucessComponent},
  {path: 'payment-fail', component:PaymentFailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
