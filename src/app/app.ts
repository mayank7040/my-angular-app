import {
  Component,
  signal,
  HostListener,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Hero } from '../app/pages/home/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {

  protected readonly title = signal('my-angular-app');

  private outer!: HTMLElement;
  private inner!: HTMLElement;

  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {

    // ✅ Only run in browser
    if (isPlatformBrowser(this.platformId)) {
      this.outer = document.querySelector('.cursor-outer') as HTMLElement;
      this.inner = document.querySelector('.cursor-inner') as HTMLElement;

      if (this.outer && this.inner) {
        this.animate();
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    if (!isPlatformBrowser(this.platformId)) return;

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (this.inner) {
      this.inner.style.left = this.mouseX + 'px';
      this.inner.style.top = this.mouseY + 'px';
    }
  }

  private animate() {
    const speed = 0.15;

    const loop = () => {
      this.currentX += (this.mouseX - this.currentX) * speed;
      this.currentY += (this.mouseY - this.currentY) * speed;

      if (this.outer) {
        this.outer.style.left = this.currentX + 'px';
        this.outer.style.top = this.currentY + 'px';
      }

      requestAnimationFrame(loop);
    };

    loop();
  }
}