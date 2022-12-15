import {SousAgence} from "./sous-agence.interface";
import {Agence} from "./agence.interface";

export interface User {
  id: number;
  login: string;
  password: string;
  isAdmin: boolean;
  sousAgence?: SousAgence;
  agence?: Agence;
}
