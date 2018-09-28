import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  valor:string;
valorTotal:number;
user;
  constructor(public navCtrl: NavController, public navP:NavParams,  private auth: AuthService) {
    this.valor= this.navP.get("valor");
    let user =this.auth.getEmail();
    var indice = user.indexOf("@");
   this.user= user.substring(0, indice);
    this.valorTotal = this.auth.sumarCreditos(this.user);
    console.log("constructor");
  }
  irACargar()
  {
    this.navCtrl.pop();

  }
  cerrarSesion()
  {
    this.auth.signOut();
  }
}
