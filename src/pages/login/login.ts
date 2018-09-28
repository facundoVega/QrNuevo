import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userActual:string = "";
passActual:string = "";
loginError;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertctrl: AlertController, 
    private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  setearUser(user, pass){
    this.userActual = user;
    this.passActual = pass;
  }

  login()
  {
  
	

		let credentials = {
			email: this.userActual,
			password: this.passActual
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
  
  }
}
