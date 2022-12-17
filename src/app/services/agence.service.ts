import {Injectable} from "@angular/core";
import {GenericService} from "./generic.service";
import {HttpClient} from "@angular/common/http";
import {Agence} from "../models/agence.interface";
import {AgenceDto} from "../models/agence.dto";


@Injectable({
  providedIn: 'root'
})
export class AgenceService extends GenericService {


  //objet T
  override T : Agence = {} as Agence;

  //objet Tdto
  override Tdto : AgenceDto = {} as AgenceDto;

  // bout d'url specifique a chaque service
  override path= '/agences';


  constructor( override http: HttpClient) {
    super(http);
    this.url = this.url + this.path;
  }

}
