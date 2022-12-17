import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../../models/transaction.interface";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../../services/transaction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-modif-transaction',
  templateUrl: './page-modif-transaction.component.html',
  styleUrls: ['./page-modif-transaction.component.css']
})
export class PageModifTransactionComponent implements OnInit {

  // objet transaction à modifier
  transaction!: Transaction;

  // formulaire groupé de la transaction à modifier
  transactionForm!: FormGroup;


  constructor(private transactionService: TransactionService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        this.transactionService.getById(Number(id))
          .subscribe(transaction => {
            this.transaction = transaction;
            this.transactionForm = this.formBuilder.group({
              id: new FormControl({value: transaction.id, disabled: true, }, Validators.required, ),
              date: new FormControl({value: transaction.date, disabled: true}),
              montantEnvoi: new FormControl({value: transaction.montantReception, disabled: false}, Validators.required),
              frais: new FormControl({value: transaction.frais, disabled: true}),
              montantTotal: new FormControl({value: transaction.montantTotal, disabled: true}),
              statut: new FormControl(transaction.statut),
              emetteur: new FormControl(transaction.emetteur)
            });
            console.log(this.transactionForm);
          }
        );
      });

  }


  ngOnInit(): void {
  }


  // mise à jour des frais et du montant total en fonction du montant à envoyer saisi
  onChangeMontantSaisi(event: any) {
    let montant_envoi = event.target.value;
    let frais = montant_envoi * this.transaction.deviseOrigine.tauxFrais;
    let montant_total = Number(montant_envoi) + Number(frais);
    this.transactionForm.patchValue({
      frais: frais,
      montant_total: montant_total
    });

  }


  // traitement du formulaire soumis
  onSubmit() {
    this.transactionService.update(this.transactionForm.value)
      .subscribe( (transaction) => {
        this.transaction = transaction;
        console.log(transaction);
      });
  }

}
