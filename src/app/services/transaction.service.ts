import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../models/transaction.interface";
import {environment} from "../../environments/environment";
import {TransactionDto} from "../models/transaction.dto";
import {PaiementDto} from "../models/paiement.dto";
import {GenericService} from "./generic.service";

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends GenericService {

  //objet T
  override T : Transaction = {} as Transaction;

  //objet Tdto
  override Tdto : TransactionDto = {} as TransactionDto;

  // bout d'url specifique a chaque service
  override path= '/transactions';


  constructor( override http: HttpClient) {
    super(http);
    this.url = this.url + this.path;
  }

  pay(paiement: PaiementDto): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.url}/payer`, paiement);
  }

  cancel(id: number): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.url}/annuler/${id}`, {});
  }

  // toDto(transaction: Transaction): TransactionDto {
  //   return {
  //     id: transaction.id,
  //     montantReception: transaction.montantReception,
  //     frais: transaction.frais,
  //     montantTotal: transaction.montantTotal,
  //     idDeviseOrigine: transaction.deviseOrigine.id,
  //     idDeviseDestination: transaction.deviseDestination.id,
  //     idPaysOrigine: transaction.paysOrigine.id,
  //     idPaysDestination: transaction.paysDestination.id,
  //     idEmetteur: transaction.emetteur.id,
  //     idRecepteur: transaction.recepteur.id,
  //     idUser: transaction.user.id,
  //     statut: transaction.statut
  //   } as TransactionDto;
  // }

  // fromDto(transactionDto: TransactionDto): Transaction {
  //   let transaction = {} as Transaction;
  //   transaction.id = transactionDto.id || 0;
  //   transaction.montantReception = transactionDto.montantReception;
  //   transaction.frais = transactionDto.frais;
  //   transaction.montantTotal = transactionDto.montantTotal;
  //   transaction.statut = transactionDto.statut;
  //   transaction.dateEnvoi = transactionDto.dateEnvoi || new Date();
  //   this.getById(transactionDto)
  //     .subscribe(t => {
  //       transaction.deviseOrigine = t.deviseOrigine;
  //       transaction.deviseDestination = t.deviseDestination;
  //       transaction.paysOrigine = t.paysOrigine;
  //       transaction.paysDestination = t.paysDestination;
  //       transaction.emetteur = t.emetteur;
  //       transaction.recepteur = t.recepteur;
  //       transaction.user = t.user;
  //     });
  //   return transaction;
  // }


}
