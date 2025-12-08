export interface CreateCommandeRequest {
  numeroCommande: string;
  clientId: number;
  montantTotal: number;
  statut: 'Payée' | 'En cours' | 'Annulée';
}

export interface UpdateCommandeRequest {
  numeroCommande: string;
  clientId: number;
  montantTotal: number;
  statut: 'Payée' | 'En cours' | 'Annulée';
}
