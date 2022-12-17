import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {UserDto} from "../../../models/user.dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.css']
})
export class PageConnexionComponent implements OnInit {

  // objet formulaire de connexion
  formConnexion = this.formBuilder.group({
    login: '',
    password: ''
  })

  //objet d'erreur
  error = ''


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  // soumission du formulaire de connexion
  onSubmit() {
    // récupération des données du formulaire
    const login = this.formConnexion.value.login;
    const password = this.formConnexion.value.password;

    if (login && password && login.length > 0 && password.length > 0) {
      let user = {login: login, password: password} as UserDto;
      try {
        this.authService.login(user)
          .subscribe((data) => {
            console.log(data);

            // enregistrement du token
            this.authService.setToken(data.token);

            // redirection vers la page d'accueil
            this.router.navigate(
              ['../agence' ],
              {
                relativeTo: this.activatedRoute,
              });
          });
      } catch (e: any) {
        this.error = e.error.message;
      }
    }

  }

}
