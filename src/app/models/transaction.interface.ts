import {Client} from "./client.interface";
import {Devise} from "./devise.interface";
import {Pays} from "./pays.interface";
import {Paiement} from "./paiement.interface";
import {User} from "./user.interface";

export interface Transaction {
  id?: number;
  date: Date;
  montant_envoi: number;
  frais: number;
  montant_total: number;
  statut: string;
  paiement?: Paiement;
  user: User;
  emetteur: Client;
  recepteur: Client;
  devise: Devise;
  pays_origine: Pays;
  pays_destination: Pays;
}
