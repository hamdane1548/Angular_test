import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone : true

})
export class Product {
  products = [
    {name : "Computer",price : 1338,selected : true,},
    {name : "Printer",price : 338,selected : false,},
    {name : "Computer",price : 2338,selected : true,}

  ]
}
