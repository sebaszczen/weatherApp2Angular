import { UserDataService } from "./../services/data/user/user-data.service"
import { AuthenticationService } from "./../services/authentication.service"
import { Component, OnInit } from "@angular/core"
import { UserDto } from "../models/userDto"
import { Router } from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: UserDto = new UserDto()
  invalidLogin: boolean = false
  errorMessage: string = "Invalid credentials"

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  handleLogin() {
      this.authenticationService.authenticate(this.user).subscribe(
        resp =>{
          this.router.navigate(["weather"])
          this.invalidLogin = false
        },
        error=>{
          this.invalidLogin = true;
      }
      )
  }

  ngOnInit() {}
}
