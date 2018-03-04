import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ProfileService } from '../../services/profile.service';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:object;
  
  constructor(private route:ActivatedRoute,public uS:UserService,private router:Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getUserid(params['id']);
    })
  }

  getUserid(id){
    this.uS.get(id).subscribe((user) => { 
      this.getUser(user)
    })
  }
  
  getUser(user){
    console.log(`console.log dentro de getUser() ${user.name}`)
    return this.user = user;
  }
}