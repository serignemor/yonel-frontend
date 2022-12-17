import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../../models/client.interface";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  // array de clients
  clients: Client[] = [];

  dataSource = new MatTableDataSource<Client>();

  // colonnes à afficher dans le tableau
  colonnes: string[] = ['id', 'nom', 'prenom', 'dateNaissance', 'lieuNaissance', 'email', 'telephone'];

  // selection du component enfant servant à la pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private clientService: ClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientService.getAll()
      .subscribe(clients => {
        this.clients = clients;
        this.dataSource.data = this.clients;
        console.log(clients)
        this.dataSource.connect()
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.dataSource.disconnect();
  }


  onAdd() {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }
}
