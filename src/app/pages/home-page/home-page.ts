import { Component } from '@angular/core';
import {AboutMePage} from '../about-me-page/about-me-page';
import {PortfolioPage} from '../portfolio-page/portfolio-page';
import {IntroductionPage} from '../introduction-page/introduction-page';
import {ServicesPage} from '../services-page/services-page';
import {ContactPage} from '../contact-page/contact-page';

@Component({
  selector: 'app-home-page',
  imports: [IntroductionPage, AboutMePage, PortfolioPage, ServicesPage, ContactPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
