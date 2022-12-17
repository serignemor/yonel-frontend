import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserDto} from "../models/user.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // url de connexion
  url = environment.apiUrl + '/login';

  constructor(private http: HttpClient) { }

  login(user: UserDto): Observable<any> {
    return this.http.post<any>(this.url, user);
  }

  register(login: string, password: string) {
    return this.http.post(this.url, { login, password })
  }

  logout() {
    localStorage.removeItem('token')
  }

  isAuthenticated() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }


}
