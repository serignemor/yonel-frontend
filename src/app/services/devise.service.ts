import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Devise} from "../models/devise.interface";


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  deviseUrl = '/api/devises';
  constructor(private http: HttpClient) {
  }

  getAllDevises(): Observable<Devise[]> {
    return this.http.get<Devise[]>(this.deviseUrl);
  }

  getDeviseById(id: number): Observable<Devise> {
    return this.http.get<Devise>(this.deviseUrl + '/' + id);
  }

  createDevise(devise: Devise): Observable<Devise> {
    return this.http.post<Devise>(this.deviseUrl, devise);
  }

  updateDevise(devise: Devise): Observable<Devise> {
    return this.http.put<Devise>(this.deviseUrl, devise);
  }

  deleteDevise(id: number): Observable<Devise> {
    return this.http.delete<Devise>(this.deviseUrl + '/' + id);
  }

}
