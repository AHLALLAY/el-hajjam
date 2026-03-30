# 💇 El-Hajjam — Gestion d’un salon de coiffure

Une application web pour aider un salon de coiffure au quotidien : comptes, services, prestations et congés.

> *Application web développée avec la stack MERN : gestion des coiffeurs, suivi des opérations, et évolution possible vers statistiques, rapports et multi-salon.*

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=plastic&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=plastic&logo=express&logoColor=white)

---

## 📋 Sommaire

1. [💡 C’est quoi ce projet ?](#cest-quoi-ce-projet)
2. [🎯 À quoi ça sert ?](#à-quoi-ça-sert)
3. [🎯 Objectifs et vision](#objectifs-et-vision)
4. [✅ Ce que l’application fait aujourd’hui](#ce-que-lapplication-fait-aujourdhui)
5. [🔜 Ce qui peut venir plus tard](#ce-qui-peut-venir-plus-tard)
6. [🚀 Comment installer le projet](#comment-installer-le-projet)
7. [📁 Les dossiers du projet](#les-dossiers-du-projet)
8. [🛠️ Les outils utilisés](#les-outils-utilisés)
9. [📊 Périmètre du projet](#périmètre-du-projet)
10. [📝 Contexte du travail (école)](#contexte-du-travail-école)
11. [🎓 Critères de performance (référence)](#critères-de-performance-référence)
12. [🔗 Documents et liens](#documents-et-liens)
13. [🤝 Contribuer](#contribuer)

---

## 💡 C’est quoi ce projet ?

**El-Hajjam** est une application sur le web. Elle utilise **React** pour l’écran et **Node.js** avec **Express** pour le serveur. Les données sont dans **MongoDB**.

Ce texte parle de **la version qui est dans ce dépôt** (le code actuel).

Pour le projet complet (toutes les exigences, tous les livrables), ouvrez le dossier [`docs/`](./docs/). Le cahier des charges (PDF) est disponible sur le dépôt : [voir le fichier sur GitHub](https://github.com/AHLALLAY/el-hajjam/blob/main/docs/cahier-des-charges/salon_de_coiffeur.pdf).

---

## 🎯 À quoi ça sert ?

Le but est simple : **gérer un salon de coiffure** avec un logiciel clair. Le code est organisé en **petits modules**. On peut **faire évoluer** le projet plus tard (voir la section sur les idées futures).

---

## 🎯 Objectifs et vision

L’objectif est de couvrir pour un salon de coiffure :

- **Gestion des coiffeurs** : création, modification, attribution de privilèges
- **Suivi des opérations** : saisie et suivi des prestations par coiffeur
- **Statistiques et rapports** (feuille de route) : analyse de la performance du salon et des coiffeurs
- **Phase future** : généralisation **multi-tenant** (chaque salon pourrait avoir son espace)

L’application vise à être **performante**, **sécurisée**, **scalable** et préparée pour une évolution vers ce modèle.

---

## ✅ Ce que l’application fait aujourd’hui

La liste ci-dessous correspond au code **déjà présent** ici.

### 🔐 Connexion et utilisateurs

- Connexion avec **email** et **mot de passe**. Le serveur utilise des **jetons JWT**.
- Il y a des comptes **admin** et **coiffeur**. Chaque rôle ne voit pas les mêmes pages.
- L’admin peut voir les coiffeurs, en créer et **changer le statut** (actif, inactif, suspendu).

### ✂️ Services et opérations

- L’admin gère un **catalogue de services** (avec les prix).
- On enregistre les **prestations** : quel service, combien d’argent, quel coiffeur.
- L’admin voit une vue globale. Le coiffeur voit **ses** opérations.

### 🏖️ Congés

- Le coiffeur peut **demander des congés** (date de début, date de fin).
- L’admin peut **accepter** ou **refuser**. Statuts côté application : **en attente**, **validée**, **refusée**.

### 📈 Tableaux de bord et erreurs

- Il y a un **tableau de bord** pour l’admin et un pour le coiffeur (chiffres et résumés).
- Des pages d’erreur existent pour **403**, **404** et **500**.

### ⚙️ Côté technique

- L’API REST est sous **`/api/v1`**.
- Les réponses sont en **JSON**. Le serveur gère les erreurs.
- Il y a des **tests unitaires** sur le service d’authentification avec **Vitest**.

---

## 🔜 Ce qui peut venir plus tard

Ces idées sont dans la feuille de route ou le cahier des charges. **Elles ne sont pas encore dans le code.**

| Sujet | Idée |
|--------|------|
| Rapports | Fichiers **PDF** ou **Excel** |
| Stocks | Suivi des produits, alertes quand il n’y en a plus |
| Congés | Distinguer **congés normaux** et **exceptionnels** (si le métier le demande) |
| DevOps | **Docker** et **Docker Compose** pour tout lancer pareil partout |
| Plusieurs salons | Un jour : **plusieurs salons** (données séparées) |
| Tests sur l’interface | Plus de tests automatiques sur le **frontend** |
| Autre | Tout ce qui est dans les docs mais pas encore codé |

---

## 🚀 Comment installer le projet

### 📦 Avant de commencer (ce qu’il faut sur l’ordinateur)

- **Node.js** (version 18 ou plus récente)
- **npm** ou **yarn** (gestionnaire de paquets)
- **Git** (gestionnaire de versions)
- **MongoDB** (sur la machine ou **MongoDB Atlas** dans le cloud)
- Un **éditeur de texte** pour le code (par exemple **VS Code**)
- **Docker** et **Docker Compose** *(facultatif pour l’instant — prévu pour une mise à jour du dépôt)*

*Docker n’est pas obligatoire pour lancer le projet en développement aujourd’hui.*

### 👣 Les étapes

1. **Cloner le dépôt** avec Git. Ouvrez un **terminal** :

   - **Windows** : PowerShell, l’invite de commandes, ou **Git Bash** (fourni avec [Git for Windows](https://git-scm.com/download/win)).
   - **macOS / Linux** : l’application **Terminal**, ou le terminal intégré à votre éditeur (**VS Code**, **Cursor**, etc.).

   Placez-vous dans le dossier où vous voulez copier le projet, puis exécutez **l’une** des commandes suivantes.

   **HTTPS** (fonctionne pour tout le monde, sans clé SSH) :
   ```bash
   git clone https://github.com/AHLALLAY/el-hajjam.git
   cd el-hajjam
   ```

   **SSH** (uniquement si une clé SSH est configurée sur GitHub) :
   ```bash
   git clone git@github.com:AHLALLAY/el-hajjam.git
   cd el-hajjam
   ```

2. **Installer les paquets**
   ```bash
   cd backend
   npm install

   cd ../frontend
   npm install
   ```

3. **Fichiers de configuration**  
   À la racine du projet (remonter d’un cran si vous êtes dans `frontend/`) :
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
   *Sous Windows PowerShell* (équivalent des commandes `cp` ci-dessus) :
   ```powershell
   Copy-Item backend/.env.example backend/.env
   Copy-Item frontend/.env.example frontend/.env
   ```

   Ouvrez chaque fichier `.env` et remplissez les valeurs (adresse MongoDB, CORS, secrets JWT, etc.).

4. **Lancer en mode développement** (toujours depuis un terminal)

   **Méthode 1 — deux fenêtres de terminal**
   ```bash
   # Terminal 1 — API
   cd backend
   npm run dev

   # Terminal 2 — site React
   cd frontend
   npm run dev
   ```

   **Méthode 2 — à la racine du projet** (un seul terminal)  
   Le dépôt contient déjà un `package.json` à la racine avec **concurrently**. Depuis le dossier `el-hajjam/` :
   ```bash
   npm install
   npm run dev
   ```
   Cela lance le backend et le frontend en même temps.

---

## 📁 Les dossiers du projet

```
el-hajjam/
├── README.md
├── docs/
│   └── cahier-des-charges/       # PDF du cahier des charges
├── backend/                      # API Node.js / Express
│   ├── config/
│   ├── controllers/
│   ├── databases/
│   ├── models/
│   ├── services/
│   ├── middlewares/
│   ├── routes/
│   ├── utils/
│   ├── tests/
│   └── index.js
└── frontend/                     # Application React (Vite)
    └── src/
```

---

## 🛠️ Les outils utilisés

### 🖥️ Interface (frontend)

- **React** — les pages
- **Vite** — construction du projet
- **Tailwind CSS** — le style
- **React Router** — le changement de page

### 🗄️ Serveur (backend)

- **Node.js**
- **Express.js**
- **MongoDB** avec **Mongoose**
- **JWT** — pour savoir qui est connecté
- **bcryptjs** — pour protéger les mots de passe

### ✨ Qualité

- **ESLint** (frontend)
- **Vitest** — tests (auth côté backend ; le frontend peut en ajouter plus tard)

### 🔧 DevOps

- **Git** — contrôle de version  
- **Docker**, **Docker Compose** — à ajouter ultérieurement pour uniformiser les environnements

---

## 📊 Périmètre du projet

- **Rôles :** administrateur et coiffeur.
- **Phase :** première version (V1) pour **un seul** salon en interne.
- Le périmètre fonctionnel est décrit dans ce README (sections « Ce que l’application fait aujourd’hui » et « Ce qui peut venir plus tard ») et, pour le détail des exigences, dans le cahier des charges.

---

## 📝 Contexte du travail (école)

- **👤 Travail :** individuel  
- **📅 Période :** du 11/11/2025 au 30/03/2026
- **✍️ Réalisé par :** Abderrahmane AHLALLAY  
- **👨‍🏫 Encadré par :** Zakaria Ziane  

---

## 🎓 Critères de performance (référence)

- ✅ Taux de complétion des fonctionnalités du périmètre (objectif pédagogique : progression satisfaisante)
- 🎣 Maîtrise des **hooks** React (y compris hooks personnalisés et contexte de connexion)
- ⚛️ **Composants fonctionnels** exclusivement
- 📋 Planification (par exemple **JIRA** : Epics, user stories, tâches)
- 🚨 Gestion des **erreurs** et des cas particuliers (exceptions côté app)
- ✔️ **Validation** des données (côté client et serveur selon les écrans)
- 📁 Projet **modulaire** et structuration claire
- 📝 **Conventions** de nommage cohérentes

---

## 🔗 Documents et liens

- **Cahier des charges (PDF)** : [voir sur GitHub](https://github.com/AHLALLAY/el-hajjam/blob/main/docs/cahier-des-charges/salon_de_coiffeur.pdf) — copie locale éventuelle : `docs/cahier-des-charges/salon_de_coiffeur.pdf`

---

## 🤝 Contribuer

Les contributions sont les bienvenues. Vous pouvez aider le projet de plusieurs façons :

- **🐛 Signaler un problème** : ouvrez une *issue* sur GitHub pour décrire un bug ou une idée.
- **💻 Proposer du code** : faites une *fork* du dépôt, créez une branche pour votre changement, puis ouvrez une *pull request* avec une courte explication.
- **📄 Améliorer la doc** : corriger une phrase, ajouter un exemple ou préciser une étape d’installation aide tout le monde.

Merci de lire d’abord ce README et le dossier `docs/` pour comprendre le périmètre. Restez courtois dans les échanges.

---

**Bon développement ! 🚀**