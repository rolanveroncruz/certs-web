import { Component } from '@angular/core';

@Component({
  selector: 'app-ds-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class DMHeaderComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
