import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userNameSubject = new BehaviorSubject("");
  getUserName(){
    return this.userNameSubject;
  }

  setUserName(userName:string){
    this.userNameSubject.next(userName);
  }

  constructor() { 

  }
}
