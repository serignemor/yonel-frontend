import {SousAgence} from "./sous-agence.interface";

export interface User {
  id: number;
  login: string;
  password?: string;
  isAdmin: boolean;
  sousAgence?: SousAgence;
}
