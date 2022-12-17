import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AgenceDto} from "../../../models/agence.dto";
import {AgenceService} from "../../../services/agence.service";

@Component({
  selector: 'app-page-creation-agence',
  templateUrl: './page-creation-agence.component.html',
  styleUrls: ['./page-creation-agence.component.css']
})
export class PageCreationAgenceComponent implements OnInit {

  // objet formulaire de creation d'une agence
  agenceForm = this.formBuilder.group({
    nom: [''],
    statut: [''],
    balance: ['']
  });


  constructor(private formBuilder: FormBuilder,
              private agenceService: AgenceService) { }

  ngOnInit(): void {
  }

  // methode de soumission du formulaire
  onSubmit() {
    // creation d'un objet agenceDto
    let agence: AgenceDto = {} as AgenceDto;

    // recuperation des valeurs du formulaire
    agence.nom = this.agenceForm.get('nom')?.value || 'nom agence';
    agence.statut = this.agenceForm.get('statut')?.value || 'statut agence';
    agence.balance = parseFloat(this.agenceForm.get('balance')?.value || '0.0');

    // creation de l'agence
    this.agenceService.create(agence)
      .subscribe(agence => {
        console.log(agence);
        this.agenceForm.reset();
      }
    );

  }

}
