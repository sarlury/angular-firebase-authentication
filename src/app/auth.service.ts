import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) {
    this.user = firebaseAuth.authState;
   }

   signup(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!', value);
    })
    .catch(err => {
      console.log('Something went wrong', err.message);
    })
   }

   login(email: string, password: string) {
     this.firebaseAuth.signInWithEmailAndPassword(email, password).then(value => {
       console.log('Nice its work');
     })
     .catch(err => {
       console.log('Something went wrong', err.message);
     })
   }

   logout() {
     this.firebaseAuth.signOut();
   }
}
