import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {PKIRedefined} from './pkiredefined/pkiredefined';
import {PKIresources} from './pki-resources/pkiresources';
import {ContactUs} from '../landing/contact-us/contact-us';
import {VideoPlayer} from '../video-player/video-player';

@Component({
  selector: 'app-pkiaas',
  imports: [
    HeaderComponent,
    PKIRedefined,
    PKIresources,
    ContactUs,
    VideoPlayer,
  ],
  templateUrl: './pkiaas.html',
  styleUrl: './pkiaas.scss'
})
export class Pkiaas {

}
