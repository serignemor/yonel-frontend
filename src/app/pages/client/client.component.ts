import { Component, OnInit } from '@angular/core';
import {Client} from "../../models/client.interface";
import {MatTableDataSource} from "@angular/material/table";
import {AgenceService} from "../../services/agence.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private clientService: AgenceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onAdd() {

  }
}
