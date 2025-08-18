import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-services-page',
  imports: [
    Button
  ],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPage {

  constructor(public router: Router) {
  }

  navigate() : void {
    this.router.navigate(['/contact']);
  }
}
