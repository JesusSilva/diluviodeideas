import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';
import { LoggedInService } from '../services/loggedin.service';

import { HomeComponent} from './home/home.component';
import { LoginFormComponent} from './login-form/login-form.component';
import { SignupFormComponent} from './signup-form/signup-form.component';
import { ProfileComponent } from './profile/profile.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NewideaComponent } from './newidea/newidea.component';
import { IdeasingleComponent } from './ideasingle/ideasingle.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'ideas', component: IdeasComponent},
    { path: 'ideas/:id', component: IdeasingleComponent},
    { path: 'search', component: SearchComponent},
    { path: 'profile/:id', component: ProfileComponent},
    { path: 'mensajes', component: MensajesComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'new', component: NewideaComponent},
    { path: '**', redirectTo: '' }
];