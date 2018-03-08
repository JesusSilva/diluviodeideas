import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ProfileService } from '../../services/profile.service';
import { SessionService } from '../../services/session.service';
import { UserService } from '../../services/user.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes: Array<any>;
  
  constructor(private route:ActivatedRoute,public mS:MensajesService,private router:Router) {
    
  }

  ngOnInit() {
    this.mS.getMensajeList().subscribe( mensaje => {

      this.mensajes = mensaje
      console.log(this.mensajes)
    } ); 
  }
}