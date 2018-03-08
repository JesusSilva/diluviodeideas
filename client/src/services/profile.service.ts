import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ProfileService {
  BASE_URL: String = "http://localhost:3000";
  options:object = {withCredentials:true};
  user:object;
  ideasList:Array<any>;
  constructor(private http: Http) {}

  getProfileId(id): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/api/profile/${id}`,this.options)
      .map(res => this.user = res.json().user);
      
  }

  editProfile(id,user):Observable<any>{
    console.log("entrooooo al servicio");
    console.log(id)
    console.log(user)
    return this.http.put(`${this.BASE_URL}/api/profile/edit/${id}`, user, this.options)
      .map(res => res.status)
  }

  eliminarColabo(id){
    console.log("entro en el servicio con este id: ",id)
    return this.http.post(`${this.BASE_URL}/acciones/colaborar-remove/${id}`, id, this.options)
      .map(res => res.status)
  }
  aceptarColabo(id){
    return this.http.put(`${this.BASE_URL}/colaborar-update/${id}`, id, this.options)
      .map(res => res.status)
  }
}