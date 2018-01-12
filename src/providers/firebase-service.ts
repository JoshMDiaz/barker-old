import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()

export class FirebaseService {
  constructor (public afd: AngularFireDatabase) {

  }

  getAllDogs() {
    return this.afd.list('/dogs/');
  }

  addDog(dog) {
    return this.afd.list('/dogs/').push(dog);
  }

  removeDog(dog) {
    return this.afd.list('/dogs/').remove(dog);
  }
}
