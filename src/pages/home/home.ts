import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { FirebaseService } from "./../../providers/firebase-service";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  // dogs: Observable<any>;
  newDog = "";
  dogs: Array<any>;

  userProfile: Observable<any>;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    private afd: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {
    // this.dogs = db.list('dogs').valueChanges();
  }

  buildDogData() {
    let dogs = [];
    let images = [
      "https://dog.ceo/api/img/mastiff-tibetan/n02108551_3840.jpg",
      "https://dog.ceo/api/img/airedale/n02096051_2717.jpg",
      "https://dog.ceo/api/img/affenpinscher/n02110627_13499.jpg",
      "https://dog.ceo/api/img/springer-english/n02102040_1201.jpg",
      "https://dog.ceo/api/img/pomeranian/n02112018_5540.jpg"
    ];
    for (let i = 0; i < 5; i++) {
      dogs.push({
        id: i,
        breed: "Husky",
        gender: i % 2 ? "female" : "male",
        eyes: "blue",
        age: 2 + i,
        name: "Simba",
        image: images[i]
      });
    }
    return dogs;
  }

  ngAfterViewInit() {
    this.dogs = this.buildDogData();
  }

  ionViewWillLoad() {
    // this.afAuth.authState.take(1).subscribe(data => {
    //   console.log(data);

    //   if (data && data.email && data.uid) {
    //     this.toast
    //       .create({
    //         message: `${data.email} is logged in!`,
    //         duration: 3000
    //       })
    //       .present();
    //     // this.userProfile = this.afd
    //     //   .list<Profile>(`profile/${data.uid}`)
    //     //   .snapshotChanges()
    //     //   .map(changes => {
    //     //     return changes.map(c => ({
    //     //       key: c.payload.key,
    //     //       ...c.payload.val()
    //     //     }));
    //     //   });
    //   } else {
    //     this.toast
    //       .create({
    //         message: `Email does not exist!`,
    //         duration: 3000
    //       })
    //       .present();
    //   }
    // });
  }

  // addDog() {
  //   this.firebaseService.addDog(this.newDog);
  // }
  //
  // removeDog(id) {
  //   this.firebaseService.removeDog(id);
  // }
}
