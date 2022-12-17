import {Client} from "./client.interface";
import {Devise} from "./devise.interface";
import {Pays} from "./pays.interface";
import {Paiement} from "./paiement.interface";
import {User} from "./user.interface";

export interface Transaction {
  id: number;
  date: Date;
  montantReception: number;
  frais: number;
  montantTotal: number;
  statut: string;
  paiement?: Paiement;
  user: User;
  emetteur: Client;
  recepteur: Client;
  deviseOrigine: Devise;
  deviseDestination: Devise;
  paysOrigine: Pays;
  paysDestination: Pays;
}
