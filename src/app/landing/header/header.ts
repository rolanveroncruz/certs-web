import {HostListener, signal, Component} from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isSolutionsOpen = signal(false);


  constructor() {
    this.onResize();
  }
  toggleMenu() {
    const next = !this.isMenuOpen();
    this.isMenuOpen.set(next);

    if (!next) this.isSolutionsOpen.set(false);
  }

  toggleSolutions() {
    this.isSolutionsOpen.update(v => !v);
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >768) {
      this.isMenuOpen.set(false);
      this.isSolutionsOpen.set(false);
    }

  }
}
