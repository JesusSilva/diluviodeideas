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
import { MensajesService } from '../services/mensajes.service';
import { ResponsesService } from '../services/responses.service';

//-- COMPONENTES --//
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProfileComponent } from './profile/profile.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { IdeasingleComponent } from './ideasingle/ideasingle.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { NewResponseComponent } from './new-response/new-response.component';
import { AccessComponent } from './access/access.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { EditResponseComponent } from './edit-response/edit-response.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdeasComponent,
    ProfileComponent,
    MensajesComponent,
    AdminComponent,
    SearchComponent,
    IdeasingleComponent,
    EditProfileComponent,
    EditIdeaComponent,
    NewIdeaComponent,
    NewResponseComponent,
    AccessComponent,
    NewMessageComponent,
    EditResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [SessionService,IdeasService,ResponsesService,ProfileService,UserService,MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
