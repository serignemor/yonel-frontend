import {Pays} from "./pays.interface";

export interface Ville {
  id?: number;
  nom: string;
  pays: Pays;
}
