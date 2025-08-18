import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {Header} from './components/header/header';
import {CustomCursor} from './directives/custom-cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    RouterOutlet,
    CustomCursor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
