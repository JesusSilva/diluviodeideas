import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class MensajesService {
  BASE_URL: String = "http://localhost:3000";
  options:object = {withCredentials:true};
  constructor(private http: Http) {}

  getMensajeList(): Observable<any> {
		return this.http
		.get(`${this.BASE_URL}/mp`,this.options)
		.map(res => res.json().mensajes);
  }
  
  newMensajeService(asunto,receptorUsername,contenido):Observable<any>{
    console.log("Servicio Mensaje", contenido)
    return this.http.post(`${this.BASE_URL}/mp/salida`, {asunto,receptorUsername,contenido}, this.options)
    .map(res => res.status)
  }
}
