import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from "../home/home";
import { LandingPage } from "../landing/landing";
import { ProfilePage } from "../profile/profile";

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
    private afAuth: AngularFireAuth
  ) {}

  ionViewDidLoad() {}

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        if (true) { //TODO: test to see if user has finished creating a profile
          this.navCtrl.setRoot(ProfilePage, {});
        } else {
          this.navCtrl.setRoot(LandingPage, {});
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  register() {
    this.navCtrl.push("RegisterPage");
  }
}
