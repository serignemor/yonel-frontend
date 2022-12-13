import {SousAgence} from "./sous-agence.interface";

export interface User {
  id?: number;
  login: string;
  password: string;
  key: string;
  sousAgence: SousAgence;
}
