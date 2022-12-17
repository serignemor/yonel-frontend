import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Transaction} from "../../../models/transaction.interface";
import {TransactionService} from "../../../services/transaction.service";
import {Observable, switchMap} from "rxjs";
import {ThemePalette} from "@angular/material/core";
import {TransactionDto} from "../../../models/transaction.dto";
import {FormBuilder} from "@angular/forms";
import {PaiementDto} from "../../../models/paiement.dto";

@Component({
  selector: 'app-page-transaction',
  templateUrl: './page-transaction.component.html',
  styleUrls: ['./page-transaction.component.css']
})
export class PageTransactionComponent implements OnInit {

  transaction: Transaction = {} as Transaction;
  matButtonColor: ThemePalette | null = 'primary';
  showPayment: Boolean= false

  // objet de formulaire pour le paiement
  paymentForm = this.formBuilder.group({
    idTransaction: 0,
    nomCompletRecepteur: '',
    typePieceIdentite: '',
    numeroPieceIdentite: ''
  });

  // types de pieces d'identité
  typesPieceIdentite = [
    {value: 'cni', viewValue: 'Carte Nationale d\'Identité'},
    {value: 'passport', viewValue: 'Passeport'},
    {value: 'permis', viewValue: 'Permis de conduire'}
  ];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionService: TransactionService,
              private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    // recuperation de la transaction à partir de l'id
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const id = params.get('id');

        this.transactionService.getById(Number(id))
          .subscribe(transaction => {
            console.log(transaction)
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
      this.transactionService.cancel(this.transaction.id)
        .subscribe(transaction => {
          this.changeTransactionStatut(transaction);
        })
    }
  }

  // redirection vers la page de paiement
  onPay() {
    let payment = {} as PaiementDto;
    payment.idTransaction =  0;
    payment.nomCompletRecepteur = this.paymentForm.value.nomCompletRecepteur || ' nom complet';
    payment.typePieceIdentite = this.paymentForm.value.typePieceIdentite || 'type de piece';
    payment.numeroPieceIdentite = this.paymentForm.value.numeroPieceIdentite || 'numero de piece';
    // this.transactionService.pay(payment)
    //   .subscribe(transaction => {
    //     this.changeTransactionStatut(transaction);
    //     this.showPayment = false;
    //   });
    console.log(payment);
  }

  //redirection vers la page de modification
  ;
  onEdit() {
    this.router
      .navigate(['.//modif'], {relativeTo: this.route}).then(r => console.log(r));
  }
}
