import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-introduction-page',
  imports: [
    Button
  ],
  templateUrl: './introduction-page.html',
  styleUrl: './introduction-page.css'
})
export class IntroductionPage {
  greetingText: string = 'Hello! My name is';
  fullName: string = 'Logan Ingram';
  roleText: string = 'I build software solutions';
  introductionText: string = `I'm a software developer focused on creating exceptional digital experiences.
                              Passionate about everything related to technology, I create user-friendly and efficient applications.
                              I love tackling complex problems and delivering high-quality work.`;
  aboutMeButtonText: string = 'About Me';
  constructor(public router: Router) {
  }

  navigate(): void {
    this.router.navigate(['/about-me'])
  }
}

