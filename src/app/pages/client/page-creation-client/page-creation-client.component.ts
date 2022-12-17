import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientService} from "../../../services/client.service";
import {ClientDto} from "../../../models/client.dto";

@Component({
  selector: 'app-page-creation-client',
  templateUrl: './page-creation-client.component.html',
  styleUrls: ['./page-creation-client.component.css']
})
export class PageCreationClientComponent implements OnInit {

  // objet de formulaire client
  clientForm: FormGroup = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    dateNaissance: [''],
    lieuNaissance: [''],
    email: [''],
    telephone: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private clientService: ClientService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // recupere les valeurs du formulaire
    let nom = this.clientForm.get('nom')?.value;
    let prenom = this.clientForm.get('prenom')?.value;
    let dateNaissance = this.clientForm.get('dateNaissance')?.value;
    let lieuNaissance = this.clientForm.get('lieuNaissance')?.value;
    let email = this.clientForm.get('email')?.value;
    let telephone = this.clientForm.get('telephone')?.value;

// envoie les valeurs au service
    let client = {
      nom: nom,
      prenom: prenom,
      dateNaissance: dateNaissance,
      lieuNaissance: lieuNaissance,
      email: email,
      telephone: telephone
    } as ClientDto;

    this.clientService.create(client).subscribe(
      (client) => {
        console.log(client);
        this.clientForm.reset();
      });


  }
}
