import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
