import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { Profile } from "../../models/profile";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  profile = {} as Profile;
  usStates: Array<{
    name: string;
    abbreviation: string;
  }>;
  breeds: Array<string>;
  isShowAboutDog: true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) {
    this.profile.dogs = [];
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase
        .object(`profile/${auth.uid}`)
        .set(this.profile)
        .then(() => this.navCtrl.setRoot('HomePage'));
    });
  }

  showAboutDog() {
    for (let i = 0; i < this.profile.numberOfDogs; i++) {
      this.profile.dogs.push({
        name: '',
        age: null,
        breed: '',
        gender: '',
        neutered: false,
        papered: false,
        registered: false,
        images: []
      });
    }
    this.isShowAboutDog = true;
  }

  ionViewDidLoad() {
    this.http
      .get("/assets/data/states.json")
      .map(data => data.json())
      .subscribe(data => {
        this.usStates = data;
      });
    this.http
      .get("/assets/data/breeds.json")
      .map(data => data.json())
      .subscribe(data => {
        this.breeds = data;
      });
  }
}
