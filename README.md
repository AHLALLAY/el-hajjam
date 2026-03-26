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
- **MongoDB** (localement ou via MongoDB Atlas)
- **Docker** et **Docker Compose** *(non requis pour l’instant — conteneurisation prévue dans une prochaine mise à jour du dépôt)*
- **Un éditeur de code** (VS Code recommandé)

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone git@github.com:AHLALLAY/el-hajjam.git
   cd el-hajjam
   ```

2. **Installer les dépendances**
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. **Configurer les variables d’environnement**  
   À la racine du dépôt (depuis `frontend/`, faire d’abord `cd ..`) :
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
   Puis ouvrir chaque `.env` et renseigner les valeurs (URI MongoDB, origine CORS, etc.).  
   *Sous Windows PowerShell :* `Copy-Item backend/.env.example backend/.env` et `Copy-Item frontend/.env.example frontend/.env`.

4. **Lancer l’application en mode développement**
   ```bash
   # Terminal 1 — API
   cd backend
   npm run dev

   # Terminal 2 — interface React
   cd frontend
   npm run dev
   ```

## 📁 Structure du projet

```
el-hajjam/
├── README.md
├── docs/
│   └── cahier-des-charges/       # Cahier des charges (PDF)
├── backend/                      # API Node.js / Express
│   ├── controllers/
│   ├── databases/
│   ├── models/
│   ├── services/
│   ├── middlewares/
│   ├── routes/
│   ├── utils/
│   └── index.js
└── frontend/                     # Application React (Vite)
    └── src/
```


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

### 📅 Gestion des congés
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

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification

### DevOps
- **Git** — contrôle de version  
- **Docker**, **Docker Compose** — à ajouter ultérieurement

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

- [Cahier des charges (PDF)](./docs/cahier-des-charges/salon_de_coiffeur.pdf)

---

**Bon développement ! 🚀**
