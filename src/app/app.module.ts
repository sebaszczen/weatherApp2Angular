import { HttpInterceptorService } from './services/http/http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WeatherComponent } from './weather/weather.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    WeatherComponent,
    LogoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{provide: HTTP_INTERCEPTORS, useClass : HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
