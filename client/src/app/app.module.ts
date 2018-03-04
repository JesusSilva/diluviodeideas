//-- ANGULAR --//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

//-- SERVICIOS --//
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { ProfileService } from '../services/profile.service';
import { IdeasService } from '../services/ideas.service';

//-- COMPONENTES --//
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProfileComponent } from './profile/profile.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { NewideaComponent } from './newidea/newidea.component';
import { IdeasingleComponent } from './ideasingle/ideasingle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    IdeasComponent,
    ProfileComponent,
    MensajesComponent,
    AdminComponent,
    SearchComponent,
    NewideaComponent,
    IdeasingleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [SessionService,IdeasService,ProfileService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
