import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QRScanner , QRScannerStatus} from '@ionic-native/qr-scanner';
import { AuthService } from '../../services/auth.service';


import {LoginPage } from '../login/login'; 
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
nombre:string;
codigoLeido:boolean =false;
 scanSub;
scanedCode;
misCargas:any[];
valor:number;
user;
mensaje="";
estaCargado:boolean =false;
  constructor(public navCtrl: NavController, private qrScanner: QRScanner, private auth: AuthService) {

    let user =this.auth.getEmail();
    var indice = user.indexOf("@");
   this.user= user.substring(0, indice);
   
 

  
  }
  cerrarSesion()
  {

      this.auth.signOut();
    
    
  }


  scan()
  {  this.auth.escribir(this.user, 10);
    this.navCtrl.push(ContactPage, {valor:10});
 /*
   
    
   
    this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);
      this.scanedCode = text;

      this.qrScanner.hide().then(()=>{
      
      
    if(this.scanedCode == "8c95def646b6127282ed50454b73240300dccabc")
    {
      this.valor = 10;

    }
    if(this.scanedCode == "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ")
    {
      this.valor=50;
 
    }
    if(this.scanedCode == "2786f4877b9091dcad7f35751bfcf5d5ea712b2f")
    {
      this.valor=100;

    }

    this.scanSub.unsubscribe(); 
    setTimeout(() => {     (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    (window.document.querySelector('.verticalHome') as HTMLElement).style.backgroundColor ="#1b1b1b";
    (window.document.querySelector('.elSaludoHome') as HTMLElement).style.color ="#FFbb00";
    (window.document.querySelector('.bottonHome') as HTMLElement).style.color ="#FFbb00";
    (window.document.querySelector('.bottonHome') as HTMLElement).style.border ="2px solid  #FFbb00";
    (window.document.querySelector('.scroll-content') as HTMLElement).style.backgroundColor ="opaque";
    (window.document.querySelector('.instruccionHome') as HTMLElement).style.color ="#fff";
    (window.document.querySelector('.instruccion2Home') as HTMLElement).style.color ="#fff";
      
    }, 1000);


    var cargo = this.auth.escribir(this.user, this.valor);
 if(cargo)
 {
  this.navCtrl.push(ContactPage, {valor:this.valor});
 }
 else
 {
  this.navCtrl.push(ContactPage, {valor:0});
 }
      
    
    
    
     

    
  
    
    

      });
   

   
     });

     this.qrScanner.show().then(()=>{

      (window.document.querySelector('.scroll-content') as HTMLElement).style.backgroundColor ="transparent";
      (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
      (window.document.querySelector('.verticalHome') as HTMLElement).style.backgroundColor ="transparent";
      (window.document.querySelector('.elSaludoHome') as HTMLElement).style.color ="transparent";
      (window.document.querySelector('.bottonHome') as HTMLElement).style.color ="transparent";
      (window.document.querySelector('.bottonHome') as HTMLElement).style.border ="none";
       (window.document.querySelector('.instruccionHome') as HTMLElement).style.color ="transparent";
    (window.document.querySelector('.instruccion2Home') as HTMLElement).style.color ="transparent";

     });



  
   */
  }

  



}
