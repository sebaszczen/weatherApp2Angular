import { UserDataService } from './data/user/user-data.service';
import { Injectable } from "@angular/core";
import { UserDto } from "../models/userDto";
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    private userDataService : UserDataService
  ) {}

  authenticate(user: UserDto): Observable<boolean> {
    let authenticated = false;
    let basicAuthHeaderString =
      "Basic " + window.btoa(user.username + ":" + user.password);
     return this.userDataService.handleLogin(user).pipe(map(
      response => {
          if (response.status == 200) {
            sessionStorage.setItem("authenticatedUser", user.username);
            sessionStorage.setItem('token',basicAuthHeaderString);
            authenticated = true;
          }
          return authenticated;
    }));
    // return authenticated;
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem("authenticatedUser");
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser)
    return sessionStorage.getItem("token");
  }

  isUserLoggedIn(): boolean {
    // console.log(!(sessionStorage.getItem('authenticatedUser')===null));
    return !(sessionStorage.getItem("authenticatedUser") === null);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
  }
}
