import {Transaction} from "./transaction.interface";

export interface PaiementDto {
  id?: number;
  date?: Date;
  idTransaction: number;
  nomCompletRecepteur: string;
  typePieceIdentite: string;
  numeroPieceIdentite: string;
}
