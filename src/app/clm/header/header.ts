import { Component } from '@angular/core';

@Component({
  selector: 'app-clm-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class CLMHeaderComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
