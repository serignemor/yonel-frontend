import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {DeviseService} from "../../services/devise.service";
import {Devise} from "../../models/devise.interface";
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction.interface";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit, AfterViewInit {

 // liste des colonnes à afficher
  colonnes: string[] = ['id', 'dateEnvoi', 'montantReception', 'deviseOrigine', 'statut', 'emetteur', 'paysOrigine', 'recepteur'];

  // objet qui contient les données à afficher dans le tableau
  dataSource = new MatTableDataSource<Transaction>();

  // array des transactions
  transactions: Transaction[] = [];

  // selection du component enfant servant à la pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private transactionService: TransactionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.transactionService.getAll()
    .subscribe(transactions => {
      if (transactions.length > 0) {
        this.transactions = transactions;
        this.dataSource.data = this.transactions;
        this.dataSource.connect();
        console.log({'transactions':transactions})
      }
    });

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
        return "accent";
      case 'payable':
        return 'accent';
      case 'paid':
        return 'primary';
      case 'cancelled':
        return 'warn';
      default:
        return 'accent';
    }
  }

  // redirection vers la page de détail de la transaction
  goToPage(transaction: Transaction) {
    this.router.navigate(
      ['./', transaction.id],
      {
        relativeTo: this.activatedRoute,
        state: {transaction}
      });
  }



}
