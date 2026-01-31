import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {WhyDoWeNeedCLM} from './whydoweneedclm/whydoweneedclm';
import {Twohundreddaycerts} from './twohundreddaycerts/twohundreddaycerts';
import {Clmcapabilities} from './clmcapabilities/clmcapabilities';
import {CLMResources} from './clm-resources/resources';
import {ContactUs} from './contact-us/contact-us';
import {VideoPlayer} from '../video-player/video-player';

@Component({
  selector: 'app-clm',
  imports: [
    HeaderComponent,
    WhyDoWeNeedCLM,
    Twohundreddaycerts,
    Clmcapabilities,
    CLMResources,
    ContactUs,
    VideoPlayer
  ],
  templateUrl: './clm.html',
  styleUrl: './clm.scss'
})
export class Clm {

}
