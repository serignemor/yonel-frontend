import {Agence} from "./agence.interface";
import {Ville} from "./ville.interface";

export interface SousAgence {
  id?: number;
  nom: string;
  code?: string;
  agence: Agence;
  ville: Ville;
  adresse: string;
  telephone: string;
  email: string;
}
