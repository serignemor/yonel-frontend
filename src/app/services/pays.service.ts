import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pays} from "../models/pays.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  // url de l'api
  paysUrl = `${environment.apiUrl}/pays`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.paysUrl);
  }

  getById(id: number): Observable<Pays> {
    return this.http.get<Pays>(`${this.paysUrl}/${id}`);
  }

  create(pays: Pays): Observable<Pays> {
    return this.http.post<Pays>(this.paysUrl, pays);
  }

  update(pays: Pays): Observable<Pays> {
    return this.http.put<Pays>(this.paysUrl, pays);
  }

  delete(id: number): Observable<Pays> {
    return this.http.delete<Pays>(`${this.paysUrl}/${id}`);
  }


}
