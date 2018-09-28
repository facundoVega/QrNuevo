import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;
  cargas:any[] = [];
  cargar:boolean;
	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
    });
  this.cargar =true;
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}
    get authenticated(): boolean {
        return this.user !== null;
      }
      
getEmail() {
    return this.user && this.user.email;
  }
  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }


  escribir(user, carga):boolean
  {
    this.cargar =true;

    this.leer(user);
    if(this.cargas.length >0)
    {  
      for(let carga1 of this.cargas)
      {
      
     
        
        if (carga1.valor.toString()=== carga.toString())
        {
          this.cargar =false;
      
      

        }
      }
    }
    else
    {
      this.cargar =true;

    }
    
 
    if(this.cargar)
    {
      let mensaje = firebase.database().ref().child(user);
      mensaje.push({ valor:carga});
   
      this.cargar=false;

      
      return true;
    }
    else
    {
      this.cargar =true;

      return false;

    }

  }
sumarCreditos(user)
{
 

 this.leer(user);
 var total:number = 0;
  for(let carga1 of this.cargas)
  {
    console.log(carga1.valor);
  //  total = total +  parseInt(carga1.valor);
    //console.log("el total es:" +total);
  }

  return total;
}


  leer(user)
  {
    let mensaje = firebase.database().ref().child(user);
    mensaje.on("value",(snap)=>{

      var data= snap.val();
     this.cargas =[];
      for(var key in data)
      {
        this.cargas.push(data[key]);
      }
     

    });
    
  }
}