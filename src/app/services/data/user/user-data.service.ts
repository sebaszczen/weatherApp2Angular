import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { City } from "src/app/models/city";
import { UserDto } from "src/app/models/userDto";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor(private routerModule: Router, private httpClient: HttpClient) {}

  createBasicAuthenticationHttpHeader() {
    let username = "a";
    let password = "a";
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);
    return basicAuthHeaderString;
  }

  handleLogin(user: UserDto) {
    
    // let basicAuthHeader = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeader
    // });

    let params = new HttpParams()
      .append("username", user.username)
      .append("password", user.password)
      .append("rolename", "Admin");

    return this.httpClient
      .post(
        "//localhost:8080/login",{},
        {
          params,
          observe: "response"
        }
      );
      // .subscribe(
      //   response => {
      //     if (response.status == 200) {
      //       this.routerModule.navigate([""]);
      //     }
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );

    // this.httpClient
    //       .get<City>(`//localhost:8080/cities/warszawa`, {
    //         // headers
    //       })
    //       .subscribe(
    //         city => {
    //           console.log(city);
    //           // this.city = city;
    //           // this.cityObs.next(this.city);
    //         },
    //         // (error: HttpErrorResponse) => {
    //         //   console.log("blad: " + error.status);
    //         // }
    //       );
  }
}
