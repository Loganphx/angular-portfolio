import { Component } from '@angular/core';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-contact-page',
  imports: [
    Button
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {
  phoneNumber: string = "+1 512 410 9082";
  email: string = "logansingram@gmail.com";

  sendData(): void {
    console.log("Sending contact");
  }
}
