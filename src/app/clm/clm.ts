import { Component } from '@angular/core';
import {CLMHeaderComponent} from './header/header';
import {WhyDoWeNeedCLM} from './whydoweneedclm/whydoweneedclm';
import {Twohundreddaycerts} from './twohundreddaycerts/twohundreddaycerts';
import {Clmcapabilities} from './clmcapabilities/clmcapabilities';
import {CLMResources} from './clm-resources/resources';
import {CLMContactUs} from './contact-us/contact-us';
import {CLMCarousel} from './carousel/carousel';

@Component({
  selector: 'app-clm',
  imports: [
    CLMHeaderComponent,
    WhyDoWeNeedCLM,
    Twohundreddaycerts,
    Clmcapabilities,
    CLMResources,
    CLMContactUs,
    CLMCarousel
  ],
  templateUrl: './clm.html',
  styleUrl: './clm.scss'
})
export class Clm {

}
