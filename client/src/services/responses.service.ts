import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ResponsesService {
  BASE_URL: String = "http://localhost:3000";
  options:object = {withCredentials:true};
  response:any;
  constructor(private http: Http) {}

  newResponseService(response, id):Observable<any>{
    const respuesta : Object = response.response
    return this.http.post(`${this.BASE_URL}/ideas/new-response/${id}`, {respuesta}, this.options)
    .map(res => res.status)
  }

  editResponse(id,mensaje):Observable<any>{
    return this.http.put(`${this.BASE_URL}/ideas/update-response/${id}`, {mensaje}, this.options)
      .map(res => res.status)
  }

  getResponseId(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/update-response/${id}`,this.options)
      .map(res => this.response = res.json().response);
  }
}
