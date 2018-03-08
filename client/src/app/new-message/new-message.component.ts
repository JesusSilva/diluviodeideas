import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  constructor(private route:ActivatedRoute,public mS:MensajesService, private router:Router) { }

  arrayMensaje:Array<any>=[];
  mensaje:any;

  ngOnInit() {
  }


  newMensaje(asunto,receptorUsername,contenido) {
    this.mensaje = { asunto,receptorUsername,contenido };
    this.arrayMensaje.push(this.mensaje);
    this.mS.newMensajeService(asunto,receptorUsername,contenido).subscribe(mensaje => {
      this.router.navigate(["/mensajes"]);
    });

    //limpieza
    this.mensaje = [contenido="", asunto="",receptorUsername=""]
  }
}
