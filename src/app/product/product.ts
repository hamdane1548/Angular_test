import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {ProductServices} from '../services/ProductServices';

@Component({
  selector: 'app-product',
  imports: [
    MatIcon
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone : true

})
export class Product implements OnInit{
   products: Array<any> = [];
   constructor(private productServices: ProductServices) {
   }
  ngOnInit() {

  }
  handleDeltet(id : number){
      let v=confirm("et vous sur de  suprrimer le produit ");
      if(v==true){
        this.products=this.products.filter(p=>p.id != id);
      }
  }
}
