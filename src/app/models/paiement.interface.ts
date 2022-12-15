import {Transaction} from "./transaction.interface";

export interface Paiement {
  id?: number;
  date: Date;
  transaction: Transaction;
  nomCompletRecepteur: string;
  typePieceIdentite: string;
  numeroPieceIdentite: string;
}
