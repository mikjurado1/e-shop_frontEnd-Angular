import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [

    {idProduct: 1, api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_01.jpg',title:"Fender" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:399},
    {idProduct: 2,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_02.jpg',title:"Gibson" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:480},
    {idProduct: 3,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_03.jpg',title:"Ibanez" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:502},
    {idProduct: 4,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_04.jpg',title:"Paul Reed Smith" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:305},
    {idProduct: 5,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_05.jpg',title:"Epiphone" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:374},
    {idProduct: 6,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_06.jpg',title:"Rickenbacker" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:354},
    {idProduct: 7,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_07.jpg',title:"Jackson" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:365},
    {idProduct: 8,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_08.jpg',title:"ESP" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:376},
    {idProduct: 9,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_09.jpg',title:"Gretsch" ,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:398},
    {idProduct: 10,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_10.jpg',title:"Squier" ,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:420},
    {idProduct: 11,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_11.jpg',title:"BC Rich" ,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:450},
    {idProduct: 12,api_id: "price_1OD0ukItkveV2TBM4gIzwztA",imageUrl: '../../assets/guitarra_12.jpg',title:"Music Man" ,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non maximus nisl. Ut luctus sodales sapien vel lacinia. Nam egestas.', price:468},
  ];

  getProducts(): Product[]{
    return [...this.products]
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.idProduct === id);
  }
}
