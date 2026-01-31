import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {VideoPlayer} from '../video-player/video-player';
import {ContactUs} from '../landing/contact-us/contact-us';
import {BehindCABForum} from './behind-cabforum/behind-cabforum';
import {AutomationIsBusinessCritical} from './automation-is-business-critical/automation-is-business-critical';
import {CLMEndToEnd} from './clmend-to-end/clmend-to-end';

@Component({
  selector: 'app-clm',
  imports: [
    HeaderComponent,
    BehindCABForum,
    AutomationIsBusinessCritical,
    CLMEndToEnd,
    ContactUs,
    VideoPlayer
  ],
  templateUrl: './clm.html',
  styleUrl: './clm.scss'
})
export class Clm {

}
