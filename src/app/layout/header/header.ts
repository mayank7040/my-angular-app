import { Component,HostListener  } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;
   currentTheme = 'theme-blue';
  isDark = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  setTheme(theme: string) {
    const body = document.body;

    body.classList.remove('theme-blue', 'theme-green', 'theme-red');
    body.classList.add(theme);

    this.currentTheme = theme;

    if (this.isDark) {
      body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    const body = document.body;

    this.isDark = !this.isDark;

    if (this.isDark) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  toggleMenu() {
  this.isMobileMenuOpen = !this.isMobileMenuOpen;
}
}
