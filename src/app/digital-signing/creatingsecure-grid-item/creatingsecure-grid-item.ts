import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-creatingsecure-grid-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './creatingsecure-grid-item.html',
  styleUrl: './creatingsecure-grid-item.scss'
})
export class CreatingsecureGridItem {
  @Input() image_url: string ="/assets/images/tablet.png";
  @Input() text: string | undefined;

}
