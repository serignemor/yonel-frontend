import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {DeviseService} from "../../services/devise.service";
import {Devise} from "../../models/devise.interface";
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction.interface";
import {Observable} from "rxjs";
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, AfterViewInit {

  // colonnes: string[] = ['id', 'date', 'montant_envoi', 'frais', 'montant_total', 'devise', 'statut', 'paiement', 'user', 'emetteur', 'recepteur', 'pays_origine', 'pays_destination'];

 // liste des colonnes à afficher
  colonnes: string[] = ['id', 'date', 'montant_total', 'devise', "montant_en_cfa", 'statut', 'emetteur'];

  // objet qui contient les données à afficher dans le tableau
  dataSource = new MatTableDataSource<Transaction>();

  // selection du component enfant servant à la pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private transactionService: TransactionService) {
    this.transactionService.getAll()
      .subscribe(transactions => {
        this.dataSource.data = transactions;
      });
  }

  ngOnInit(): void {
    this.dataSource.connect();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.dataSource.disconnect();
  }


  // changer la couleur de la ligne en fonction du statut
  changeColorStatut(statut: string) {
    switch (statut) {
      case 'transmitted':
        return '';
      case 'payable':
        return 'accent';
      case 'paid':
        return 'primary';
      case 'cancelled':
        return 'warn';
      default:
        return '';
    }
  }
}
