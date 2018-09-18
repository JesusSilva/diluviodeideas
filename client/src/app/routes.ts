import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';
import { LoggedInService } from '../services/loggedin.service';

import { HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { IdeasComponent } from './ideas/ideas.component';
import { IdeasingleComponent } from './ideasingle/ideasingle.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { EditIdeaComponent } from './edit-idea/edit-idea.component';
import { AccessComponent } from './access/access.component';
import { EditResponseComponent } from './edit-response/edit-response.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'access', component: AccessComponent },
    { path: 'ideas', component: IdeasComponent},
    { path: 'new-idea', component: NewIdeaComponent},
    { path: 'detail-idea/:id', component: IdeasingleComponent},
    { path: 'edit-idea/:id', component: EditIdeaComponent},
    { path: 'edit-response/:id', component: EditResponseComponent},
    { path: 'search', component: SearchComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'profile/edit/:id', component: EditProfileComponent},
    { path: 'mensajes', component: MensajesComponent},
    { path: 'admin', component: AdminComponent},
    { path: '**', redirectTo: '' }
];