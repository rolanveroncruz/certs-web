import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Clm} from '../../clm/clm';

@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {

  protected readonly Clm = Clm;
}
