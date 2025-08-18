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

  redirectTo(): void {
    // window.open(url, '_blank');
  }

  protected readonly HTMLImageElement = HTMLImageElement;
}
