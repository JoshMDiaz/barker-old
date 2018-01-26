import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../models/user";
import { HomePage } from "../home/home";
import { LandingPage } from "../landing/landing";
import { ProfilePage } from "../profile/profile";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private afd: AngularFireDatabase
  ) {}

  ionViewDidLoad() {}

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot('LandingPage', {uid: result.uid});
      }
    } catch (e) {
      console.log(e);
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }
}
