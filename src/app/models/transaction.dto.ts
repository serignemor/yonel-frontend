export interface TransactionDto {
  id?: number;
  date?: Date;
  montantReception: number;
  frais: number;
  montantTotal: number;
  statut: string;
  idUser: number;
  idEmetteur: number;
  idRecepteur: number;
  idDeviseOrigine: number;
  idDeviseDestination: number;
  idPaysOrigine: number;
  idPaysDestination: number;
}
