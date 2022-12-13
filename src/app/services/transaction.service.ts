import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../models/transaction.interface";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionUrl = '/api/transactions';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Transaction[]> {
    return this.http.get(this.transactionUrl) as Observable<Transaction[]>;
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get(this.transactionUrl + '/' + id) as Observable<Transaction>;
  }

  create(transaction: Transaction): Observable<Transaction> {
    return this.http.post(this.transactionUrl, transaction) as Observable<Transaction>;
  }

  update(transaction: Transaction): Observable<Transaction>  {
    return this.http.put(this.transactionUrl, transaction) as Observable<Transaction>;
  }

  delete(id: number): Observable<Transaction> {
    return this.http.delete(this.transactionUrl + '/' + id) as Observable<Transaction>;
  }
}
