import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { SessionService } from '../services/session.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Diluvio de Ideas';
  error:string;
  user:object;

  constructor(public session:SessionService,public profile:ProfileService, private router: Router) {
    this.session.getUser();
  }

  ngOnInit() {
  }


  logout(){
    this.session.logout()
    .catch(e => this.error = e)
    .subscribe();
  }
}
