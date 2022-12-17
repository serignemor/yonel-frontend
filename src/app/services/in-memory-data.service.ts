import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Pays} from "../models/pays.interface";
import {Devise} from "../models/devise.interface";
import {Agence} from "../models/agence.interface";
import {SousAgence} from "../models/sous-agence.interface";
import {faker} from "@faker-js/faker/locale/fr";
import {User} from "../models/user.interface";
import {Client} from "../models/client.interface";
import {Transaction} from "../models/transaction.interface";
import {Paiement} from "../models/paiement.interface";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    // base de données fictive pour les devises
    const devises: Devise[] = [
      {id: 1, nom: 'Dollars', symbole: 'USD', tauxConversion: 655.95, tauxFrais: 0.1},
      {id: 2, nom: 'Euros', symbole: 'EUR', tauxConversion: 700, tauxFrais: 0.2},
      {id: 3, nom: 'Francs CFA', symbole: 'XOF', tauxConversion: 1, tauxFrais: 0.3},
    ];

    // base de données fictive pour les pays
    const pays: Pays[] = [
      {id: 1, nom: 'France', code: 'FR'},
      {id: 2, nom: 'USA', code: 'US'},
      {id: 3, nom: 'Côte d\'Ivoire', code: 'CI'},
      {id: 4, nom: 'Sénégal', code: 'SN'},
    ];

    // base de données fictive pour les villes
    const villes = [
      {id: 1, nom: 'Paris', code: 'PAR', pays: pays[0]},
      {id: 2, nom: 'New York', code: 'NY', pays: pays[1]},
      {id: 3, nom: 'Abidjan', code: 'ABJ', pays: pays[2]},
      {id: 4, nom: 'Dakar', code: 'DKR', pays: pays[3]},
    ];

    // base de données fictive pour les agences
    const agences: Agence[] = [
      {id: 1, nom: 'Ecobank', statut: faker.helpers.arrayElement(['actif', 'inactif']), balance: 1000000,},
      {id: 2, nom: 'BICIG', statut: faker.helpers.arrayElement(['actif', 'inactif']), balance: 2000000,},
      {id: 3, nom: 'BCEAO', statut: faker.helpers.arrayElement(['actif', 'inactif']), balance: 3000000,},
      {id: 4, nom: 'BNA', statut: faker.helpers.arrayElement(['actif', 'inactif']), balance: 4000000,},
    ];

    // base de données fictive pour les sous-agences
    const sousAgences: SousAgence[] = [
      {
        id: 1,
        nom: 'Agence 1',
        code: 'AG1',
        agence: agences[0],
        adresse: 'Abidjan',
        ville: villes[0],
        telephone: faker.phone.number(),
        email: faker.internet.email()
      },
      {
        id: 2,
        nom: 'Agence 2',
        code: 'AG2',
        agence: agences[1],
        adresse: 'Dakar',
        ville: villes[1],
        telephone: faker.phone.number(),
        email: faker.internet.email()
      },
      {
        id: 3,
        nom: 'Agence 3',
        code: 'AG3',
        agence: agences[2],
        adresse: 'Paris',
        ville: villes[2],
        telephone: faker.phone.number(),
        email: faker.internet.email()
      },
      {
        id: 4,
        nom: 'Agence 4',
        code: 'AG4',
        agence: agences[3],
        adresse: 'New York',
        ville: villes[3],
        telephone: faker.phone.number(),
        email: faker.internet.email()
      },
    ];

    // base de données fictive pour les utilisateurs
    const users: User[] = [
      {
        id: 1,
        login: 'admin',
        password: 'admin',
        isAdmin: faker.helpers.arrayElement([true, false]),
        sousAgence: sousAgences[0]
      },
      {
        id: 2,
        login: 'user',
        password: 'user',
        isAdmin: faker.helpers.arrayElement([true, false]),
        sousAgence: sousAgences[1]
      },
      {
        id: 3,
        login: 'user1',
        password: 'user1',
        isAdmin: faker.helpers.arrayElement([true, false]),
        sousAgence: sousAgences[2]
      },
      {
        id: 4,
        login: 'user2',
        password: 'user2',
        isAdmin: faker.helpers.arrayElement([true, false]),
        sousAgence: sousAgences[3]
      },
    ];

    // base de données fictive pour les clients
    const clients: Client[] = [
      {
        id: 1,
        nom: 'Diallo',
        prenom: 'Mamadou',
        telephone: faker.phone.number(),
        email: faker.internet.email(),
        dateNaissance: faker.date.past(),
        lieuNaissance: faker.address.city()
      },
      {
        id: 2,
        nom: 'Sow',
        prenom: 'Aminata',
        telephone: faker.phone.number(),
        email: faker.internet.email(),
        dateNaissance: faker.date.past(),
        lieuNaissance: faker.address.city()
      },
      {
        id: 3,
        nom: 'Diop',
        prenom: 'Fatou',
        telephone: faker.phone.number(),
        email: faker.internet.email(),
        dateNaissance: faker.date.past(),
        lieuNaissance: faker.address.city()
      },
      {
        id: 4,
        nom: 'Sylla',
        prenom: 'Moussa',
        telephone: faker.phone.number(),
        email: faker.internet.email(),
        dateNaissance: faker.date.past(),
        lieuNaissance: faker.address.city()
      },
    ];

    // base de données fictive pour les transactions
    let transactions: Transaction[] = [
      {
        id: 1,
        montantReception: 100000,
        frais: 2500,
        montantTotal: 102500,
        statut: 'paid',
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 2,
        montantReception: 200000,
        frais: 5000,
        montantTotal: 205000,
        statut: faker.helpers.arrayElement(['transmitted', 'payable']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 3,
        montantReception: 300000,
        frais: 7500,
        montantTotal: 307500,
        statut: 'paid',
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 4,
        montantReception: 400000,
        frais: 10000,
        montantTotal: 410000,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 5,
        montantReception: 500000,
        frais: 12500,
        montantTotal: 512500,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 6,
        montantReception: 600000,
        frais: 15000,
        montantTotal: 615000,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 7,
        montantReception: 700000,
        frais: 17500,
        montantTotal: 717500,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 8,
        montantReception: 800000,
        frais: 20000,
        montantTotal: 820000,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 9,
        montantReception: 900000,
        frais: 22500,
        montantTotal: 922500,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      },
      {
        id: 10,
        montantReception: 1000000,
        frais: 25000,
        montantTotal: 1025000,
        statut: faker.helpers.arrayElement(['transmitted', 'payable', 'cancelled']),
        paysOrigine: faker.helpers.arrayElement(pays),
        paysDestination: faker.helpers.arrayElement(pays),
        deviseOrigine: faker.helpers.arrayElement(devises),
        deviseDestination: faker.helpers.arrayElement(devises),
        date: faker.date.past(),
        emetteur: faker.helpers.arrayElement(clients),
        recepteur: faker.helpers.arrayElement(clients),
        user: faker.helpers.arrayElement(users)
      }
    ];

    // base de données des paiements
    const paiements: Paiement[] = [
      {
        id: 1,
        date: faker.date.past(),
        transaction: transactions[0],
        nomCompletRecepteur: transactions[0].recepteur.prenom + transactions[0].recepteur.prenom,
        typePieceIdentite: faker.helpers.arrayElement(['passport', 'cni']),
        numeroPieceIdentite: faker.random.numeric(16)
      },
      {
        id: 2,
        date: faker.date.past(),
        transaction: transactions[2],
        nomCompletRecepteur: transactions[2].recepteur.prenom + transactions[2].recepteur.prenom,
        typePieceIdentite: faker.helpers.arrayElement(['passport', 'cni']),
        numeroPieceIdentite: faker.random.numeric(16)
      },
    ];

    return {devises, pays, villes, agences, sousAgences, users, clients, transactions, paiements};

  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // // hero id + 1.
  // genId(devises: Devise[]): number {
  //   return devises.length > 0 ? Math.max(...devises.map(devise => devise.id)) + 1 : 11;
  // }
}
