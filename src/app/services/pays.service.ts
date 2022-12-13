import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pays} from "../models/pays.interface";

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  paysUrl = '/api/pays';
  constructor(private http: HttpClient) { }

  getAllPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.paysUrl);
  }

  getPaysById(id: number): Observable<Pays> {
    return this.http.get<Pays>(this.paysUrl + '/' + id);
  }

  createPays(pays: Pays): Observable<Pays> {
    return this.http.post<Pays>(this.paysUrl, pays);
  }

  updatePays(pays: Pays): Observable<Pays> {
    return this.http.put<Pays>(this.paysUrl, pays);
  }

  deletePays(id: number): Observable<Pays> {
    return this.http.delete<Pays>(this.paysUrl + '/' + id);
  }


}
