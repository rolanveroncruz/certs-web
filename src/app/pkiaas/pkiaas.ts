import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {PKIRedefined} from './pkiredefined/pkiredefined';
import {PKIresources} from './pki-resources/pkiresources';
import {PKIContactUs} from './pki-contact-us/pki-contact-us';
import {VideoPlayer} from '../video-player/video-player';

@Component({
  selector: 'app-pkiaas',
  imports: [
    HeaderComponent,
    PKIRedefined,
    PKIresources,
    PKIContactUs,
    VideoPlayer,
  ],
  templateUrl: './pkiaas.html',
  styleUrl: './pkiaas.scss'
})
export class Pkiaas {

}
