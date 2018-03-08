import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {ResponsesService} from '../../services/responses.service'

@Component({
  selector: 'app-edit-response',
  templateUrl: './edit-response.component.html',
  styleUrls: ['./edit-response.component.css']
})
export class EditResponseComponent implements OnInit {
  
  response:object;
  id: any;
  private sub: any;

  constructor(private route:ActivatedRoute,public rS:ResponsesService,private router:Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  editResponse(mensaje){
    console.log("ENTRO EN EL COMPONENT")
    console.log("El id del params es: ",this.id);
    console.log("y este es el mensaje: ", mensaje)
    this.rS
    .editResponse(this.id,mensaje)
    .subscribe((mensaje) => {
      console.log(mensaje);
      this.router.navigate(['/ideas']);
    });
  }
}
