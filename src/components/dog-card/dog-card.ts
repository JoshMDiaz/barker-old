import { Component, Input } from '@angular/core';

@Component({
  selector: 'dog-card',
  templateUrl: 'dog-card.html'
})
export class DogCardComponent {

  @Input() obj: Object = {};

  constructor() {

  }

}
