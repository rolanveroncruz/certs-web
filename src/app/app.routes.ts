import { Routes } from '@angular/router';
import {Landing} from './landing/landing';
import {Clm} from './clm/clm';
import {Pkiaas} from './pkiaas/pkiaas';
import {DigitalSigning} from './digital-signing/digital-signing';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'clm', component: Clm },
  { path: 'pkiaas', component: Pkiaas},
  { path: 'digital-signing', component: DigitalSigning},
];
