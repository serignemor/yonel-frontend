import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../models/transaction.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  // url de l'api
  transactionUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    return this.http.get(this.transactionUrl) as Observable<Transaction[]>;
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}`);
  }

  create(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.transactionUrl, transaction);
  }

  update(transaction: Transaction): Observable<Transaction>  {
    return this.http.put<Transaction>(this.transactionUrl, transaction);
  }

  delete(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.transactionUrl}/${id}`);
  }
}
