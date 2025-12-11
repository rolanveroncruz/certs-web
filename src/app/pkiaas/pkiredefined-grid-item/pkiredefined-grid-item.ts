import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pkiredefined-grid-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './pkiredefined-grid-item.html',
  styleUrl: './pkiredefined-grid-item.scss'
})
export class PKIRedefinedGridItem {
  @Input() image_url: string ="/assets/images/tablet.png";
  @Input() text: string | undefined;

}
