import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {PKIAASCarousel} from './carousel/carousel';
import {PKIRedefined} from './pkiredefined/pkiredefined';
import {PKIresources} from './pki-resources/pkiresources';
import {PKIContactUs} from './pki-contact-us/pki-contact-us';

@Component({
  selector: 'app-pkiaas',
  imports: [
    HeaderComponent,
    PKIAASCarousel,
    PKIRedefined,
    PKIresources,
    PKIContactUs,
  ],
  templateUrl: './pkiaas.html',
  styleUrl: './pkiaas.scss'
})
export class Pkiaas {

}
