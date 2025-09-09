import { Component } from '@angular/core';
import {ProductGridItem} from '../product-grid-item/product-grid-item';

@Component({
  selector: 'app-products',
  imports: [
    ProductGridItem
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

}
