import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user:object;
  constructor(private route:ActivatedRoute,public pS:ProfileService,private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.pS.getProfileId(params['id']).subscribe( user => {this.user = user});
    });
  }

  edit(user){
    this.pS
    .editProfile(user._id, user)
    .subscribe((user) => {
      this.router.navigate(['/profile', user._id]);
    });
  }

}
