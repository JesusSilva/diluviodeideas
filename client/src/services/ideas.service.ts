import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class IdeasService {
  BASE_URL: String = "http://localhost:3000";

  constructor(private http: Http) {}

  getIdeaList(): Observable<any> {
    return this.http
        .get(`${this.BASE_URL}/ideas`)
        .map(res => res.json());
  }

  getSingleIdea(id): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/ideas/${id}`)
      .map(res => res.json());
  }
}