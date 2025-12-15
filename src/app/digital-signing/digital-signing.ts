import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {CreatingSecure} from './creatingsecure/creatingsecure';
import {DSResources} from './ds-resources/resources';
import {DSContactUs} from './contact-us/contact-us';
import {VideoPlayer} from '../video-player/video-player';

@Component({
  selector: 'app-digital-signing',
  imports: [
    HeaderComponent,
    CreatingSecure,
    DSResources,
    DSContactUs,
    VideoPlayer
  ],
  templateUrl: './digital-signing.html',
  styleUrl: './digital-signing.scss'
})
export class DigitalSigning {

}
