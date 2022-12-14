import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Transaction} from "../../../models/transaction.interface";
import {TransactionService} from "../../../services/transaction.service";
import {Observable, switchMap} from "rxjs";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-page-transaction',
  templateUrl: './page-transaction.component.html',
  styleUrls: ['./page-transaction.component.css']
})
export class PageTransactionComponent implements OnInit {

  transaction!: Transaction;
  matButtonColor: ThemePalette | null = 'primary';


  constructor(private route: ActivatedRoute,
              private service: TransactionService) { }


  ngOnInit(): void {

    // recuperation de la transaction à partir de l'id
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('id');

        this.service.getById(Number(id))
          .subscribe(transaction => {
            this.changeTransactionStatut(transaction);
          });
      });
  }


  // changer la couleur de la ligne en fonction du statut
  changeColorStatut(statut: string) {
    switch (statut) {
      case 'transmitted':
        this.matButtonColor = 'accent';
        break;
      case 'payable':
        this.matButtonColor = 'accent';
        break;
      case 'paid':
        this.matButtonColor = 'primary';
        break;
      case 'cancelled':
        this.matButtonColor = 'warn';
        break;
      default:
        this.matButtonColor = null;
    }
  }


  // changer les infos de la transaction affichées
  changeTransactionStatut(transaction: Transaction) {
    this.transaction = transaction;
    this.changeColorStatut(transaction.statut);
  }


  // boite d'alerte pour confirmer l'annulation de la transaction
  onCancel() {
    if (confirm('Voulez-vous vraiment annuler cette transaction?')) {
      let updatedTransaction = { ...this.transaction } as Transaction;
      updatedTransaction.statut = 'cancelled';

      this.service.update(updatedTransaction)
        .subscribe(transaction => {
          this.changeTransactionStatut(updatedTransaction);
        });
    }
  }
}
