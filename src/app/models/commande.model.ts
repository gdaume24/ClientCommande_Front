export interface Commande {
  id: number;
  numeroCommande: string;
  clientId: number;
  client?: { nom: string; prenom: string };
  montantTotal: number;
  statut: 'Payée' | 'En cours' | 'Annulée';
  dateCreation: string;
}
