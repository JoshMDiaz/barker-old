import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "ionic-angular";
import { FirebaseService } from "./../../providers/firebase-service";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Profile } from "../../models/profile";
import { Observable } from "rxjs/Observable";

@IonicPage()
@Component({
  selector: "page-landing",
  templateUrl: "landing.html"
})
export class LandingPage {

  profileData: AngularFireObject<Profile>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) {}

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Logging in..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      console.log('sup');

    }, 1000);
  }

  ionViewDidLoad() {
    this.presentLoadingDefault();
    let uid = this.navParams.get("uid");

    this.afDatabase.list(`profile/${uid}`).valueChanges();
    console.log(this.afDatabase);

  }
}
