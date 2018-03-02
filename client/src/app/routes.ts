import { Routes } from '@angular/router';
import { SessionService } from '../services/session.service';

import { HomeComponent} from './home/home.component';
import { LoginFormComponent} from './login-form/login-form.component';
import { SignupFormComponent} from './signup-form/signup-form.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    //{ path: 'new', component: AddPhotoEmotionComponent, canActivate: [LoggedInService] },
    { path: '**', redirectTo: '' }
];