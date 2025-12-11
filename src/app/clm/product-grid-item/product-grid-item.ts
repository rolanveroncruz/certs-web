import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-grid-item',
  imports: [],
  templateUrl: './product-grid-item.html',
  styleUrl: './product-grid-item.scss'
})
export class ProductGridItem {
  @Input() headline: string | undefined;
  @Input() text: string | undefined;

}
