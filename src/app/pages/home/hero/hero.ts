import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
