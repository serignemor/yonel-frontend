import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Devise} from "../models/devise.interface";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  // url de l'api
  devisesUrl = `${environment.apiUrl}/devises`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Devise[]> {
    return this.http.get<Devise[]>(this.devisesUrl);
  }

  getById(id: number): Observable<Devise> {
    return this.http.get<Devise>(`${this.devisesUrl}/${id}`);
  }

  create(devise: Devise): Observable<Devise> {
    return this.http.post<Devise>(this.devisesUrl, devise);
  }

  update(devise: Devise): Observable<Devise> {
    return this.http.put<Devise>(this.devisesUrl, devise);
  }

  delete(id: number): Observable<Devise> {
    return this.http.delete<Devise>(`${this.devisesUrl}/${id}`);
  }

}
