# Client / Commande Frontend — Angular

Frontend Angular pour une application de gestion clients/commandes.

Ce projet est le front associé au backend ASP.NET Core : https://github.com/gdaume24/PROJET_Client_Commande_ASPNET

## Stack

- Angular 21
- TypeScript
- Angular Material
- RxJS
- Reactive Forms
- HTTP interceptors
- Tailwind CSS
- Vitest

## Fonctionnalités

- Inscription / connexion
- Intercepteur d’authentification
- Gestion des clients
- Création de clients via formulaire
- Gestion des commandes
- Création de commandes via formulaire
- Services API typés
- UI Angular Material

## Structure repérée

```text
src/app/
  components/      Tables et formulaires clients/commandes
  pages/           Pages auth, clients, commandes
  services/        Services HTTP auth/client/commande
  models/          Modèles TypeScript
  dtos/            Requests API
```

## Lancement

```bash
npm install
npm start
```

Build :

```bash
npm run build
```

## Valeur portfolio

Ce projet complète le backend C#/.NET et permet de montrer un écosystème fullstack : API ASP.NET Core sécurisée + frontend Angular moderne avec formulaires, services, routing et intégration HTTP.

## Améliorations possibles

- Ajouter screenshots/GIF.
- Ajouter une page de démonstration avec données mockées.
- Documenter les variables d’API et l’URL backend.
- Ajouter tests ciblés sur services et composants clés.
