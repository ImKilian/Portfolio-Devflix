# DEVFLIX — Portfolio de Kilian Claverie

Portfolio inspiré de Netflix, présentant mon parcours, mes projets et mes compétences en développement web.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| **Front** | React 19, TypeScript, Vite, React Router v7 |
| **API** | Node.js, Express 5, Prisma 7, PostgreSQL 16 |
| **Infra** | Docker, Docker Compose |

---

## Prérequis

- [Docker](https://www.docker.com/) et Docker Compose installés
- Node.js 18+ *(uniquement pour le développement local sans Docker)*

---

## Démarrage avec Docker *(recommandé)*

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd Portfolio-devflix
```

### 2. Créer les fichiers d'environnement

Copier les fichiers d'exemple et les renseigner :

```bash
cp api/.env.example api/.env
cp front/.env.example front/.env
```

**`api/.env`** — à adapter avec tes propres identifiants :
```env
DATABASE_URL="postgresql://UTILISATEUR:MOT_DE_PASSE@localhost:5433/NOM_BDD"
PORT=3000
```

**`front/.env`**
```env
VITE_API_URL=http://localhost:3000
```

> Les fichiers `.env` sont exclus du dépôt Git (`.gitignore`). Ne jamais committer d'identifiants réels.

### 3. Lancer les conteneurs

```bash
docker compose up --build
```

> Le front démarre sur **http://localhost:5173**, l'API sur **http://localhost:3000**.

### 4. Initialiser la base de données *(première fois uniquement)*

Dans un second terminal, une fois les conteneurs démarrés :

```bash
# Appliquer les migrations
docker exec -it devflix_api npm run db:migrate

# Remplir la base avec les données de démo
docker exec -it devflix_api npm run seed
```

---

## Développement local *(sans Docker)*

Nécessite PostgreSQL installé localement (le port par défaut est `5432`).  
Adapter `DATABASE_URL` dans `api/.env` en conséquence.

### API

```bash
cd api
npm install
npm run db:migrate
npm run seed
npm run dev          # Démarre sur http://localhost:3000
```

### Front

```bash
cd front
npm install
npm run dev          # Démarre sur http://localhost:5173
```

---

## Commandes utiles

### Base de données *(dans `api/`)*

```bash
npm run db:migrate   # Appliquer les migrations Prisma
npm run db:reset     # Réinitialiser entièrement la BDD
npm run seed         # Insérer les données de démo
npm run db:studio    # Ouvrir Prisma Studio (interface visuelle BDD)
```

> Pour Prisma Studio en local, s'assurer que `DATABASE_URL` pointe sur le port `5433`.

### Front *(dans `front/`)*

```bash
npm run dev          # Serveur de développement avec HMR
npm run build        # Build de production
npm run lint         # Linter (oxlint)
npm run preview      # Prévisualiser le build de production
```

### API *(dans `api/`)*

```bash
npm run dev          # Démarrage avec rechargement automatique (nodemon)
npm run build        # Compilation TypeScript → dist/
npm run start        # Démarrage en production (depuis dist/)
```

---

## Structure du projet

```
Portfolio-devflix/
├── api/
│   ├── prisma/
│   │   ├── schema.prisma     # Modèles de données
│   │   ├── migrations/       # Historique des migrations
│   │   └── seed.ts           # Données de démo
│   ├── src/
│   │   ├── index.ts          # Point d'entrée Express
│   │   ├── lib/prisma.ts     # Instance Prisma
│   │   └── routes/           # Routes API
│   └── Dockerfile
├── front/
│   ├── src/
│   │   ├── components/       # Navbar, Carousel, VideoModal...
│   │   ├── context/          # ProfileContext (profils Pokémon)
│   │   ├── hooks/            # useApi
│   │   ├── pages/            # Home, MesProjets, Diplômes, Contact...
│   │   ├── styles/           # CSS mobile-first par page
│   │   └── types/            # Types TypeScript partagés
│   └── Dockerfile
└── docker-compose.yml
```

---

## Points d'accès

| Service | URL |
|---------|-----|
| Front | http://localhost:5173 |
| API | http://localhost:3000 |
| Santé API | http://localhost:3000/health |
| Prisma Studio | http://localhost:5555 *(en local)* |
