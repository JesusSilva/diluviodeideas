import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username:string;
  name:string;
  espec:string;
  email:string;
  about_me:string;
  password:string;
  confirm_password:string;
  avatar:string;
  error:string;
  constructor(public session:SessionService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.session.signup(this.username,this.name,this.espec,this.email,this.about_me,this.password,this.confirm_password,this.avatar)
      .subscribe(
        (user) => {
          console.log(user);
          this.router.navigate(['/user/login']);
        },
        (err) => this.error = err
      );
  }
}