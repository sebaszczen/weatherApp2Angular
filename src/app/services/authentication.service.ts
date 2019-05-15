import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }

  authenticate(email:string, password:string): boolean{
    if(email==='a'&& password==='a'){
      sessionStorage.setItem('authenticatedUser',email);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    // console.log(!(sessionStorage.getItem('authenticatedUser')===null));
    return !(sessionStorage.getItem('authenticatedUser')===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
