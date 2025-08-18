import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-about-me-page',
  imports: [
    Button
  ],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css'
})
export class AboutMePage {
  sectionTitle: string = 'About Me';
  introductionText: string = 'Learn more';
  aboutMeParagraph1: string = `I'm a passionate software developer with a strong interest in building
    efficient and user-friendly applications. My journey into coding started with a curiosity for
    technology and problem-solving`;
  aboutMeParagraph2: string = `Over the years, I've worked on various projects, gaining experience in
    web and mobile development. I enjoy learning new technologies and improving my skills to
    create high-quality software solutions`;
  aboutMeParagraph3: string = `Currently, I focus on developing accessible and scalable applications,
    ensuring a seamless experience for users. I'm always eager to take on new challenges
    and collaborate with like-minded individuals`;
  buttonText: string = 'View Projects';

  constructor(public router: Router) {
  }

  navigate(): void {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
