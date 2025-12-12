import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {DSCarousel} from './carousel/carousel';
import {CreatingSecure} from './creatingsecure/creatingsecure';
import {DSResources} from './ds-resources/resources';
import {DSContactUs} from './contact-us/contact-us';

@Component({
  selector: 'app-digital-signing',
  imports: [
    HeaderComponent,
    DSCarousel,
    CreatingSecure,
    DSResources,
    DSContactUs
  ],
  templateUrl: './digital-signing.html',
  styleUrl: './digital-signing.scss'
})
export class DigitalSigning {

}
