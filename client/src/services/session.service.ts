import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username:string,
  password:string
}

@Injectable()
export class SessionService {

  BASEURL:string = "http://localhost:3000/api"
  options:object = {withCredentials:true};
  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  public user:User;

  getUser(){
    return this.user;
  }
  public configureUser(set=false){
    return (user) => {
      if(set){
        this.user = user;
      }else{
        this.user = null
      }
      return user;
    }
  }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(username:string,password:string,confirm_password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/signup`, {username,password,confirm_password}, this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  login(username:string, password:string):Observable<any>{
    return this.http.post(`${this.BASEURL}/login`, {username,password},this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }

  logout():Observable<any>{
    return this.http.get(`${this.BASEURL}/logout`,this.options)
      .map(res => res.json())
      .map(this.configureUser(false))
      .catch(this.handleError);
  }

  isLoggedIn():Observable<any> {
    return this.http.get(`${this.BASEURL}/loggedin`,this.options)
      .map(res => res.json())
      .map(this.configureUser(true))
      .catch(this.handleError);
  }
}
