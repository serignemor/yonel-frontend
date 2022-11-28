import {Agence} from "./agence.interface";

export interface SousAgence {
  id?: number;
  nom: string;
  agence: Agence;
  adresse: string;
  telephone: string;
  email: string;
}
