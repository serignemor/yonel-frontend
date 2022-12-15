export interface TransactionDto {
  montant_envoi: number;
  frais: number;
  montant_total: number;
  statut: string;
  idUser: number;
  idEmetteur: number;
  idRecepteur: number;
  idDeviseOrigine: number;
  idDeviseDestination: number;
  paysOrigine: number;
  paysDestination: number;
}
