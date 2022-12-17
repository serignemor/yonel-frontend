import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Transaction} from "../../models/transaction.interface";
import {MatPaginator} from "@angular/material/paginator";
import {AgenceService} from "../../services/agence.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Agence} from "../../models/agence.interface";

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {

  // liste des colonnes à afficher
  colonnes: string[] = ['id', 'nom', 'statut', 'balance'];

  // objet qui contient les données à afficher dans le tableau
  dataSource = new MatTableDataSource<Agence>();

  // selection du component enfant servant à la pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // array des agences
  agences: Agence[] = [];


  constructor( private agenceService: AgenceService,
               private router: Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.agenceService.getAll()
      .subscribe(agences => {
        this.agences = agences;
        this.dataSource.data = this.agences;
        console.log(agences)
        this.dataSource.connect();
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.dataSource.disconnect();
  }

  // redirection vers la page de creation d'une agence
  goToCreate() {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }
}
