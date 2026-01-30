# 💇 El-Hajjam - Application de Gestion de Salon de Coiffure

**Assigné par :** 👤 Zakaria Ziane  
**Créé le :** 📅 14 Novembre 2025  
**Développé par :** Abderrahmane AHLALLAY

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=plastic&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=plastic&logo=express&logoColor=white)

---

> *Une application web complète développée avec la stack MERN permettant de gérer efficacement un salon de coiffure : gestion des coiffeurs, suivi des opérations, statistiques et rapports.*

## 🎯 Objectif du projet

Développer une application complète de gestion pour un salon de coiffure permettant :
- **Gestion des coiffeurs** : création, modification, attribution de privilèges
- **Suivi des opérations** : saisie et suivi des prestations effectuées par chaque coiffeur
- **Statistiques et rapports** : analyse de la performance du salon et des coiffeurs
- **Phase future** : généralisation multi-tenant (chaque salon peut créer son espace)

L'application doit être **performante**, **sécurisée**, **scalable** et préparée pour une évolution vers un modèle multi-tenant.

## 🚀 Getting Started

### Prérequis

- **Node.js** (version 18.x ou supérieure)
- **npm** ou **yarn** (gestionnaire de paquets)
- **Git** (contrôle de version)
- **Docker** et **Docker Compose** (pour la conteneurisation)
- **MongoDB** (localement ou via MongoDB Atlas)
- **Un éditeur de code** (VS Code recommandé)

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/AHLALLAY/el-hajjam.git
   cd el-hajjam
   ```

2. **Installer les dépendances**
   ```bash
   # Frontend
   cd v1/frontend
   npm install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   # Frontend
   cd v1/frontend
   npm run dev
   ```

## 📁 Structure du projet

```
el-hajjam/
├── README.md                     # Ce fichier
└── v1/
    ├── backend/                  # Application Node.js/Express
    │   ├── controllers/          # Contrôleurs de l'API
    │   ├── databases/            # Configuration MongoDB
    │   ├── models/               # Modèles Mongoose
    │   ├── services/             # Services métier
    │   ├── middlewares/          # Middlewares Express
    │   ├── utils/                # Utilitaires
    │   └── index.js              # Point d'entrée du serveur
    ├── docs/                     # Documentation du projet
    │   └── cahier-des-charges/   # Cahier des charges
    └── frontend/                 # Application React (à venir)
```

## 📚 Documentation

La documentation complète est disponible dans le dossier `v1/docs/` :

- **[Documentation principale](./v1/docs/readme.md)** - Vue d'ensemble et navigation
- **[Cahier des charges](./v1/docs/cahier-des-charges/readme.tex)** - Version LaTeX complète
- **[Spécifications fonctionnelles](./v1/docs/specifications/)** - Fonctionnalités et user stories
- **[Schéma MongoDB](./v1/docs/data/schema-mongodb.md)** - Modèle de données
- **[Documentation API](./v1/docs/technical/api-documentation.md)** - Architecture REST
- **[Politique de sécurité](./v1/docs/technical/security.md)** - Sécurité et RGPD
- **[Stratégie de tests](./v1/docs/technical/tests-strategy.md)** - Tests unitaires, intégration, E2E

## 🎯 Fonctionnalités principales

### 🔐 Authentification et Gestion des Utilisateurs
- Authentification JWT
- Création et gestion des comptes coiffeurs
- Attribution de privilèges

### 💼 Gestion des Opérations
- Saisie des prestations par coiffeur
- Historique des opérations
- Modification et suppression

### 📊 Statistiques et Rapports
- Statistiques personnelles (coiffeur)
- Vue globale admin
- Génération de rapports (PDF/Excel)

### 📅 Gestion des Congés
- Demande de congés (régulier/exceptionnel)
- Approbation par l'admin

### 📦 Gestion des Stocks
- Signalement de produits épuisés
- Alertes automatiques

## 🛠️ Technologies utilisées

### Frontend
- **React** - Bibliothèque UI
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS

### Backend (à venir)
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification

### DevOps
- **Docker** - Conteneurisation
- **Docker Compose** - Orchestration
- **GitHub Actions** - CI/CD

## 📊 Statistiques du projet

- **Total des fonctionnalités** : 100+
- **Modules métier** : 10
- **Acteurs** : 2 (Administrateur, Coiffeur)
- **Phase de développement** : V1 (Application interne)

## 📝 Modalités pédagogiques

- **Type de travail :** 👤 Individuel
- **Dates :** 📅 Du 11/11/2024 au 30/03/2025

## ✅ Critères de performance

- ✅ Taux de complétion des fonctionnalités (minimum 80%)
- 🎣 Maîtrise de l'utilisation des hooks personnalisés
- ⚛️ Utilisation exclusive des functional components
- 📋 Planification sur JIRA avec Epics, User Stories, Tasks
- 🚨 Gestion des exceptions et des erreurs
- ✔️ Validation des données côté UI
- 📁 Structuration du projet modulaire
- 📝 Respect des conventions de nommage

## 🔗 Liens utiles

- [Documentation complète](./v1/docs/readme.md)
- [Cahier des charges PDF](./v1/docs/cahier-des-charges/salon_de_coiffeur.pdf)

---

**Bon développement ! 🚀**
