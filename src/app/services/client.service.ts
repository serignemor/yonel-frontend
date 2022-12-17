import { Injectable } from '@angular/core';
import {GenericService} from "./generic.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends GenericService{

  constructor( public override http: HttpClient) {
    super(http);
    this.url = 'http://localhost:3000/clients';
  }
}
