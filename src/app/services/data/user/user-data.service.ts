import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDto } from "../../../../../../weatherApp/src/app/models/userDto";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor(private routerModule: Router, private httpClient: HttpClient) {}

  handleLogin(user: UserDto) {
    let headers = new HttpHeaders({
      Authorization: "Basic " + btoa("a" + ":" + "a"),
      "X-Requested-With": "XMLHttpRequest",
      username: "ad@gmail.com",
      password: "a"
    });
    let options = { headers: headers};

    let params = new HttpParams()
    .append("username", "a")
    .append("password", "a")
    .append("rolename", "Admin");

    this.httpClient
      .post("//localhost:8080/login", { username: "ad@gmail.com",
      password: "a"}, {headers, params, observe: 'response'})
      .subscribe(response=> {
        if(response.status==200){
          this.routerModule.navigate(['http://localhost:4200']);
        }
      }, error=> {console.log(error)});


  }
}
