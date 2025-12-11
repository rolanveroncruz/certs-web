import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-carousel-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './carousel-item.html',
  styleUrl: './carousel-item.scss'
})
export class CarouselItem {
  @Input() headline: string | undefined;
  @Input() text: string | undefined;
  @Input() image_url: string = "assets/images/landing-image.png";
  @Input() priority: boolean = false;
}
