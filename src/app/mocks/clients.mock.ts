import {Client} from '../models/client.model';
export const CLIENTS_MOCK: Client[] = [
  {
    id: 1,
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@gmail.com",
    telephone: "0123456789",
    adresse: "12 rue de la Paix, Paris",
    dateCreation: "2025-12-01T14:38:19.140853"
  },
  {
    id: 2,
    nom: "Martin",
    prenom: "Sophie",
    email: "sophie.martin@gmail.com",
    telephone: "0678234511",
    adresse: "4 avenue République, Lyon",
    dateCreation: "2025-12-02T10:12:48.000000"
  },
  {
    id: 3,
    nom: "Nguyen",
    prenom: "Lucas",
    email: "lucas.nguyen@gmail.com",
    telephone: "0654123987",
    adresse: "21 boulevard Liberté, Lille",
    dateCreation: "2025-12-03T08:22:31.000000"
  }
];
