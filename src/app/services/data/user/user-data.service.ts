import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDto } from "../../../../../../weatherApp/src/app/models/userDto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  constructor(private httpClient: HttpClient) {}

  handleLogin(user: UserDto) {
    let headers = new HttpHeaders({
      Authorization: "Basic " + btoa("a" + ":" + "a"),
      "X-Requested-With": "XMLHttpRequest",
      username: "ad@gmail.com",
      password: "a"
    });
    let options = { headers: headers};

    let params = new HttpParams()
    .append("username", "ad@gmail.com")
    .append("password", "a")
    .append("rolename", "Admin");

    this.httpClient
      .post("//localhost:8080/login", { username: "ad@gmail.com",
      password: "a"}, {headers, params})
      .subscribe(error => console.log('There was an error: '));


  }
}
