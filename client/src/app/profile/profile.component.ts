import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user:any;
  responseList:any;
  ideasList:any;
  error:any;
  colaboracionesList:any = {} 
  colaboracionesPending:any
  colaboracionesJoin:any
  
  constructor(private route:ActivatedRoute,public pS:ProfileService,public router:Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.pS.getProfileId(params['id']).subscribe( user => {
        this.user = user;
        this.ideasList = user.ideas;
        this.responseList = user.response;
        this.colaboracionesList = user.ideas;
        this.colaboracionesPending = this.user.ideas[0].pending
        this.colaboracionesJoin
        console.log(user)
      })
    })
  }


  declinarColaboracion(id){
    console.log("declinar")
    this.colaboracionesPending.pop(id)
    this.pS.eliminarColabo(id).subscribe(
      (r) => { 
        this.router.navigate(['/']);
      },
      (err) => this.error = err
      );
  }
  aceptarColaboracion(id){
    console.log("aceptar")
    this.pS.aceptarColabo(id)
  }
}