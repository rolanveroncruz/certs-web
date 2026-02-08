import { Component } from '@angular/core';
import {HeaderComponent} from '../landing/header/header';
import {CreatingSecure} from './creatingsecure/creatingsecure';
import {DSResources} from './ds-resources/resources';
import {ContactUs} from '../landing/contact-us/contact-us';
import {VideoPlayer} from '../video-player/video-player';
import {TransformYourDocumentSecurity} from './transform-your-document-security/transform-your-document-security';
import {StopWaitingForWetSignatures} from './stop-waiting-for-wet-signatures/stop-waiting-for-wet-signatures';

@Component({
  selector: 'app-digital-signing',
  imports: [
    HeaderComponent,
    CreatingSecure,
    DSResources,
    ContactUs,
    VideoPlayer,
    TransformYourDocumentSecurity,
    StopWaitingForWetSignatures
  ],
  templateUrl: './digital-signing.html',
  styleUrl: './digital-signing.scss'
})
export class DigitalSigning {

}
