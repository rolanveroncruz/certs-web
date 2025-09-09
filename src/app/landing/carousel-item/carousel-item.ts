import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-carousel-item',
  imports: [],
  templateUrl: './carousel-item.html',
  styleUrl: './carousel-item.scss'
})
export class CarouselItem {
@Input() headline: string | undefined;
@Input() text: string | undefined;
}
