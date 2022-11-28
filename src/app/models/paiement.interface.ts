export interface Paiement {
  id?: number;
  date: string;
  nom_complet_recepteur: string;
  type_piece_identite: string;
  numero_piece_identite: string;
}
