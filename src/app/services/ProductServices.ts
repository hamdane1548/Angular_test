import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  products = [
    {id:1, name : "Computer",price : 1338,selected : true,},
    {id:2,name : "Printer",price : 338,selected : false,},
    {id:3,name : "Computer",price : 2338,selected : true,}
  ]
   constructor() {
   }
   getAllproducts(){
    return this.products;
   }
   deleteproduct(id : number){
    this.products=this.products.filter(p=>p.id !=id);
   }
}
