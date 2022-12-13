import {Transaction} from "./transaction.interface";

export interface Paiement {
  id?: number;
  date: Date;
  transaction: Transaction;
  nom_complet_recepteur: string;
  type_piece_identite: string;
  numero_piece_identite: string;
}
