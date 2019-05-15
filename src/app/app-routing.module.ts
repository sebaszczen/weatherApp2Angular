import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from "./services/route-guard.service";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
  {path: "login",component: LoginComponent},
  {path: "logout",component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'weather', component: WeatherComponent, canActivate: [RouteGuardService]},
  { path: "registration", component: RegistrationComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
