import { Component, Input } from '@angular/core';

/**
 * Generated class for the DogCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dog-card',
  templateUrl: 'dog-card.html'
})
export class DogCardComponent {

  @Input('dog') dog: {};

  constructor() {
    
  }

}
