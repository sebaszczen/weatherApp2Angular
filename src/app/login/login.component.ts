import { UserDataService } from "./../services/data/user/user-data.service";
import { AuthenticationService } from "./../services/authentication.service";
import { Component, OnInit } from "@angular/core";
import { UserDto } from "../models/userDto";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: UserDto = new UserDto();
  invalidLogin: boolean = false;
  errorMessage: string = "Invalid credentials";

  constructor(
    private userDataService: UserDataService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  handleLogin() {
    if (
      this.authenticationService.authenticate(
        this.user.email,
        this.user.password
      )
    ) {
      this.router.navigate(["weather"]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    this.userDataService.handleLogin(this.user);
  }

  ngOnInit() {}
}
