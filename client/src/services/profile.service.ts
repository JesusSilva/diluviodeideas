import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ProfileService {
  BASE_URL: String = "http://localhost:3000/api";

  constructor(private http: Http) {}

  getProfile(): Observable<any> {
    return this.http
        .get(`${this.BASE_URL}/profile`)
        .map(res => res.json());
  }

  getProfileId(id): Observable<any> {
    return this.http
      .get(`${this.BASE_URL}/profile/${id}`)
      .map(res => res.json());
  }
}