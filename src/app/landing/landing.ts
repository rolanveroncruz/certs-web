import { Component } from '@angular/core';
import {HeaderComponent} from './header/header';
import {Solutions} from './solutions/solutions';
import {ContactUs} from './contact-us/contact-us';
import {Footer} from './footer/footer';
import {Carousel} from './carousel/carousel';
import {Products} from './products/products';
import {Resources} from './resources/resources';
import {Partners} from './partners/partners';
@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    Solutions,
    ContactUs,
    Footer,
    Carousel,
    Products,
    Resources,
    Partners,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
