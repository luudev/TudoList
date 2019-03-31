import { Injectable, forwardRef, NgModule } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { User } from './../models/user';
import { Profile } from './../models/profile';

@NgModule({providers: [forwardRef(() => AuthService)]})
export class AuthServiceModule {
}

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore){
  }

  newUser(user: User): Promise<any>{
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  setProfile(profile: Profile): Promise<any>{
    return this.afs.doc(`users/${profile.user_uid}`).set(profile);
  }

  login(user: User): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  }

  logout(): Promise<any>{
    return this.afAuth.auth.signOut();
  }

  resetPassword(email: string){
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }


}
