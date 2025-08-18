import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import {AboutMePage} from './pages/about-me-page/about-me-page';
import {PortfolioPage} from './pages/portfolio-page/portfolio-page';
import {ContactPage} from './pages/contact-page/contact-page';
import {ServicesPage} from './pages/services-page/services-page';

export const routes: Routes = [
  {path: "", component: HomePage, pathMatch: "full"},
  // {path: "about-me", component: AboutMePage},
  // {path: "portfolio", component: PortfolioPage},
  // {path: "services", component: ServicesPage},
  // {path: "contact", component: ContactPage},
  {path: "*", redirectTo: ""}
];
