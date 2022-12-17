import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Devise} from "../../models/devise.interface";
import {DeviseService} from "../../services/devise.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {

  // liste des colonnes à afficher
  colonnes: string[] = ['id', 'nom', 'code', 'symbole', 'tauxConversion', 'tauxFrais'];

  // objet qui contient les données à afficher dans le tableau
  dataSource = new MatTableDataSource<Devise>();

  // selection du component enfant servant à la pagination
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // array des agences
  devises: Devise[] = [];

  constructor(private deviseService: DeviseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.deviseService.getAll()
      .subscribe(devises => {
        this.devises = devises;
        this.dataSource.data = this.devises;
        console.log(devises)
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
  onAdd() {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }

}
