import { Component } from '@angular/core';
import {HeaderComponent} from './header/header';
import {HeroComponent} from './hero-component/hero-component';
import {SubheroComponent} from './subhero-component/subhero-component';
import {BusinessIsSecure} from './business-is-secure/business-is-secure';
import {SSLCertificates} from './ssl-certificates/ssl-certificates';
import {ChooseTheRight} from './choose-the-right/choose-the-right';
import {SigningCerts} from './signing-certs/signing-certs';
import {Solutions} from './solutions/solutions';
import {ContactUs} from './contact-us/contact-us';
import {Footer} from './footer/footer';
@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    HeroComponent,
    SubheroComponent,
    BusinessIsSecure,
    SSLCertificates,
    ChooseTheRight,
    SigningCerts,
    Solutions,
    ContactUs,
    Footer
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
