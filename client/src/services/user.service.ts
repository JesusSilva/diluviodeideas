import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

    BASEURL:string = "http://localhost:3000"
    // options:object = {withCredentials:true};

constructor(private http: Http){
}

get(id){
    return this.http.get(`${this.BASEURL}/api/profile/${id}`)
    .map((res) => res.json());
}


}