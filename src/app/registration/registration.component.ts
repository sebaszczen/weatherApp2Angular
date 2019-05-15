import { HttpClient } from '@angular/common/http';
import { UserDto } from "./../../../../weatherApp/src/app/models/userDto";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  private user: UserDto = new UserDto();

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  register(){
    console.log(this.user);
    this.httpClient.post<UserDto>("//localhost:8080/users", this.user)
    .subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }
}
