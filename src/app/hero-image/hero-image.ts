import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-image',
  imports: [
  ],
  templateUrl: './hero-image.html',
  styleUrl: './hero-image.scss'
})
export class HeroImage {
  @Input({ required: true }) headline!: string;
  @Input({ required: true }) bodyText!: string;
  @Input({ required: true }) safeImgSrc!: string;


}
