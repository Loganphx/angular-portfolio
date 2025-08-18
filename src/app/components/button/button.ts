import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() buttonText: string = '';
  @Input() buttonAction: () => void = () => {};

  constructor(public router: Router) {
  }

  onButtonClick() : void {
    this.buttonAction();
  }
}
