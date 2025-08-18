import { Component } from '@angular/core';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-portfolio-page',
  imports: [
    Button
  ],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.css'
})
export class PortfolioPage {

  doNothing(): void {
    console.log('this implementation does nothing')
  }

  protected readonly HTMLImageElement = HTMLImageElement;
}
