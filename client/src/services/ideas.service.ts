import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class IdeasService {
  BASE_URL: String = "http://localhost:3000";
  options:object = {withCredentials:true};
  idea:object;
  constructor(private http: Http) {}

  getIdeaId(id): Observable<any> {
    return this.http.get(`${this.BASE_URL}/ideas/${id}`,this.options)
      .map(res => this.idea = res.json().idea);
  }

  editIdea(id,idea):Observable<any>{
    return this.http.put(`${this.BASE_URL}/ideas/edit/${id}`, idea, this.options)
    .map(res => res.status)
  }

  newIdeaService(idea):Observable<any>{
    return this.http.post(`${this.BASE_URL}/ideas/new/`, idea, this.options)
    .map(res => res.status)
  }

  getIdeaList(): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/ideas`,this.options)
      .map(res => res.json());
  }

  getSingleIdea(id): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/ideas/${id}`,this.options)
      .map(res => res.json().idea);
  }
}
