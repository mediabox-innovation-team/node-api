# Introduction
Le contenu de ce guide vise non pas à enseigner exhaustivement chaque technologie présentée, mais à fournir des directives et des bonnes pratiques pour l'utilisation de ces outils. Pour chacune des technologies ou outils mentionnés dans ce guide, vous trouverez un lien renvoyant vers une description complète pour approfondir vos connaissances sur la mise en œuvre de cet outil.

Express.js peut être utilisé pour créer différents types d'applications. Cependant, le but de ce document est de vous fournir des directives pour créer une API REST que vous pourrez ensuite consommer à travers une application.

## <a name="belongs"></a> A qui appartient ce guide
Ce manuel s'adresse aux développeurs de la société Mediabox, visant à approfondir et enrichir leurs compétences dans l'utilisation de Node.js et Express.js pour le développement d'API. Il est expressément interdit de diffuser le contenu de ce guide à des individus n'appartenant pas à l'entreprise, dans le but de garantir une intégrité optimale.

## <a name="purpose"></a> Objectifs de la Formation
À l'issue de cette formation, l'apprenant sera en mesure de :
- Mettre en place un nouveau projet grâce à npm
- Maîtriser les bases de Node.js et d'Express.js
- Utiliser efficacement un ORM Sequelize
- Structurer de manière optimale un projet
- Mettre en place l'internationalisation d'une application
- Appliquer les bonnes pratiques pour développer une API performante et sécurisée

## <a name="techs"></a> Liste des technologies et outils
Ceci est une liste des principales technologies et outils présentés dans ce guide :
- <a href="https://nodejs.org/en">NodeJs</a> - Permet d'exécuter du code JavaScript côté serveur
- <a href="https://www.npmjs.com/">NPM (Node Package Manager)</a> - Est le gestionnaire de paquets officiel pour l'écosystème Node.js
- <a href="https://expressjs.com/">ExpresJS</a> - Un framework web pour Node.js qui simplifie la création d'une application
- <a href="https://expressjs.com/">Sequelize</a> - Un ORM (Object-Relational Mapping) pour Node.js qui  simplifi l'interaction avec une base de données relationnelle 
- <a href="https://jwt.io/">JWT (JSON Web Token)</a> - Un format ouvert utilisé pour transmettre des assertions entre un serveur et un client. Il est couramment utilisé dans le contexte de l'authentification et de l'autorisation dans les applications web et les services.
- <a href="https://momentjs.com/">Moment</a> - Une bibliothèque JavaScript très populaire pour la manipulation, le formatage et l'affichage de dates et d'heure
- <a href="socket.io">Socket.io</a> - Socket.IO est une bibliothèque JavaScript qui permet la communication en temps réel bidirectionnelle entre les clients web et les serveurs

## <a name="requirements"></a> Prérequis
Pour tirer pleinement profit de cette formation, veuillez vous assurer de disposer des compétences préalables suivantes :
- Des bases en Javascript (avoir déjà vu les conditions, variable et boucles aidera à la compréhension)
- Comprenez le concept d'asynchronisme en JavaScript (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">Voir plus</a>)
- Familiarité avec l'utilisation du terminal.
- Comprenez les bases des systèmes de gestion de bases de données (SQL)
- Savoir utiliser un éditeur de code (on utilisera ici Visual Studio Code)

## <a name="deroulement"></a> Déroulement de la formation
La formation sera divisée en plusieurs sections. La première partie abordera les fondamentaux de la technologie Node.js avec Express.js. Dans la deuxième partie, nous dresserons la liste des meilleures bibliothèques à utiliser pour développer une application performante et sécurisée. Enfin, nous conclurons par un exemple pratique visant à mettre en application les connaissances acquises.

## <a name="environement"></a> Préparation d'un environnement
Pour créer un nouveau projet avec Node.js et Express.js:
- Assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez télécharger la dernière version depuis le site officiel de Node.js : https://nodejs.org/.
- npm (Node Package Manager) est généralement inclus avec l'installation de Node.js.

Pour vérifier si Node.js et npm (Node Package Manager) sont installés sur votre machine, vous pouvez utiliser le terminal ou l'invite de commandes. Voici comment procéder en fonction de votre système d'exploitation :

Node.js
```
node -v
```
npm
```
npm -v
```

Si Node.js et npm sont installés, les commandes ci-dessus afficheront les versions correspondantes. Si Node.js oui npm ne sont pas installés, vous obtiendrez généralement un message indiquant que la commande n'est pas reconnue.

## <a name="environement"></a> Création d'un nouveau projet
### Initialisation d'un nouveau projet
Pour créer un nouveau projet, commencez par créer un dossier qui servira de répertoire principal pour votre projet. Ensuite, ouvrez votre terminal ou invite de commandes, déplacez-vous vers l'emplacement où vous avez créé le projet, et exécutez la commande suivante :
```
npm init
```
Cette commande vous posera quelques questions sur votre projet (par exemple, le nom, la version, la description, le point d'entrée, les tests, le référentiel, les mots-clés, l'auteur, la licence, etc.). Vous pouvez appuyer sur "Enter" pour accepter les valeurs par défaut ou saisir vos propres informations.

![Init new project](https://i.ibb.co/F3NyjzL/Screenshot-2024-01-16-143300.png)

Après avoir répondu à ces questions (ou accepté les valeurs par défaut), deux fichiers: `package.json` et `package-lock.json` seront créés dans le répertoire de votre projet, contenant les informations que vous avez fournies. Ces fichier sont essentiels pour la gestion des dépendances, la configuration du projet, et d'autres aspects liés au développement Node.js.

### Installation d'une bibliothèque
Pour installer une bibliotheque, la premiere etape est de chercher le nom de la bibliotheque qui correpond a vos besoins, une fois que vous avez identifié une bibliothèque qui correspond à vos besoins, cliquez sur le lien vers la page de la bibliothèque sur le site npm. Là, vous trouverez des informations sur la bibliothèque, y compris sa documentation.

Retournez dans votre projet et exécutez la commande `npm install` suivie du nom de la bibliothèque. Par exemple, si vous avez choisi la bibliothèque "date-fns", vous pouvez exécuter :
```
npm install date-fns
```
Après l'installation, npm met à jour le fichier `package.json` avec les informations de la bibliothèque installée. Vous verrez une nouvelle entrée dans la section des dépendances.

## <a name="express"></a> Express
### Installation d'express.js
Utilisez la commande suivante pour installer Express.js dans votre projet :
```
npm install express
```
### Fichier d'entré de l'application
Lorsque vous créez une application Express.js, vous devez spécifier un fichier qui sera l'entrée principale de votre application. Ce fichier est généralement appelé "point d'entrée" ou "fichier d'application". Par convention, il est souvent nommé `app.js` ou `index.js`.

Dans ce fichier, vous configurez votre application Express en définissant des routes, des middleware, et en écoutant les requêtes sur un port spécifique. 

Créez un fichier d'application `index.js` dans votre projet et configurez-le pour utiliser Express.

Voici un exemple de contenu pour un fichier d'entrée d'application en Express.js :
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur votre application Express.js !');
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
```
Voici une explication détaillée de ce que fait chaque partie du code:

1. Importation du module Express
```js
// Le code importe le module Express.js et le stocke dans la variable express.
const express = require('express');
```
2. Création d'une instance de l'application Express
```js
// Une instance de l'application Express est créée en appelant la fonction express(). Cette instance représente votre application web.
const app = express();
```
3. Définition d'une route pour la racine ('/') 
```js
// Une route est définie pour la méthode HTTP GET sur la racine de l'application ('/')
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre application Express.js !');
});
```
4. Configuration du port d'écoute
```js
// Le numéro de port sur lequel le serveur écoutera les requêtes est spécifié. Dans cet exemple, le port 3000 est utilisé.
const port = 3000;
```
5. Lancement du serveur :
```js
// Le serveur est démarré et configuré pour écouter les connexions entrantes sur le port spécifié (3000 dans cet exemple). Lorsque le serveur est prêt à recevoir des connexions, la fonction de rappel est exécutée, affichant le message "Serveur écoutant sur le port 3000" dans la console.
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});

```

### Démarrage de l'Application
Exécutez votre application avec la commande suivante dans le terminal :
```
node index.js
```

Apres avoir executer cette commande, vous verrez dans le terminal le message `Serveur écoutant sur le port 3000` que nous avons configuré une fois l'application démarrée.

### Test de l'Application
Pour tester une application API, vous pouvez utiliser des outils tels que <a href="https://www.postman.com/">Postman</a> ou <a href="https://insomnia.rest/">Insomnia</a> pour envoyer des requêtes HTTP à votre API et vérifier les réponses.

Pour utiliser ces outils, rendez-vous sur leur site officiel, téléchargez le logiciel, puis procédez à l'installation sur votre ordinateur. Une fois que le logiciel est en cours d'exécution, créez une nouvelle requête en précisant l'URL de votre API pour inspecter la réponse.


Pour la suite de cette formation, nous utiliserons <a href="https://www.thunderclient.com/">Thunder Client</a>, une extension simple et populaire pour VSCode. L'avantage est que vous n'aurez pas besoin d'installer d'autres logiciels, car l'extension sera directement intégrée à votre éditeur de texte.

Voici les étapes pour installer Thunder Client dans VSCode:

1. Commencez par installer l'extension en passant par <a href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client">ici</a>

2. Une fois installée, vous remarquerez une icône Thunder Client dans le sidebar de VSCode.
3. Cliquez sur l'icône Thunder Client, puis sélectionnez `New Request` pour tester une nouvelle requête.
4. Un nouvel onglet s'ouvrira, vous permettant de spécifier le lien de la requête à tester. Choisissez  la méthode  `GET` et saisissez l'URL `http://localhost:3000`  dans la barre d'adresse, puis cliquez sur le bouton `SEND` comme illustré dans l'image ci-dessous :
![Thunder Client Home](https://i.ibb.co/GvT2r1m/Screenshot-2024-01-16-164136.png)
5. Une fois la requête soumise, vous verrez le message `Bienvenue sur votre application Express.js !`` que nous avons renvoyé en réponse à la requête sur la route racine.
> Bravo ! Vous venez de créer votre première application Express.js !

## <a name="structure"></a> Structure
Bien structurer un projet Node.js avec Express offre plusieurs avantages, tels que la facilité de maintenance, la scalabilité, la lisibilité du code, et la facilité d'ajout de nouvelles fonctionnalités. Voici à quoi pourrait ressembler une bonne structure pour un projet Node.js avec Express :
<pre>
- class
  ├─ uploads
  │  └─ UsersUpload.js
  │  └─ AdminUpload.js
  ├─ Upload.js
  ├─ Validation.js
- config
  ├─ lang
  │  └─ en.json
  │  └─ fr.json
  ├─ app.js
- constants
  ├─ RESPONSE_CODES.js
  ├─ RESPONSE_STATUS.js
- controllers
  ├─ auth
  ├─ admin
  ├─ service
- crons
  ├─ SENDING_PROMOTIONS_EMAILS.js
- keys
  ├─ firebase.json
- middlewares
  ├─ bindUser.js
  ├─ requireAuth.js.js
- models
  ├─ User.js
- node_modules
- public
- routes
  ├─ auth
  ├─ admin
  ├─ service
- socket
  ├─ events.js
  ├─ index.js
- utils
  ├─ sequerize.js
  ├─ randomInt.js
- views
  ├─ emails
.env
.gitignore
package-lock.json
package.json
server.js
  </pre>
  Voici une description détaillée de chaque répertoire et fichier :
  - `class/`: Contient des classes qui sont utilisées dans l'application.
- `config/`: Contient des fichiers de configuration de l'application, notamment pour la gestion des langues.
- `constants/`: Dossier contenant des fichiers définissant des constantes pour l'application.
- `controllers/`: Dossier qui peut contenir des contrôleurs, des fichiers qui gèrent la logique de contrôle de votre application.
- `crons/`: Dossier qui peut contenir des fichiers liés à l'exécution de tâches cron, par exemple, pour l'automatisation de certaines actions.
- `keys/`: Dossier qui pourrait contenir des clés, par exemple, des fichiers de configuration ou des clés d'API spécifiques à votre application.
- `middlewares/`: Dossier pour les middlewares, des fonctions intermédiaires qui peuvent être utilisées pour intercepter ou modifier des requêtes HTTP.
- `models/`: Dossier qui contient les définitions de modèles de données pour l'application.
- `node_modules/`: Dossier où les dépendances de votre projet sont installées par npm.
- `public/`: Dossier où vous placez des fichiers statiques tels que des images, des styles CSS et des scripts JavaScript, qui seront accessibles publiquement.
- `routes/`: Dossier qui peut contenir les fichiers de définition des routes pour votre application.
- `socket/`: Dossier qui peut contenir des fichiers liés à la gestion des sockets, utilisés pour la communication en temps réel.
- `utils/`: Dossier qui contient des utilitaires, par exemple, des fonctions ou des configurations réutilisables.
- `views/`: Dossier qui contient des fichiers de vue si votre application utilise un moteur de template.
- `.env`: Fichier de configuration pour les variables d'environnement.
- `.gitignore`: Fichier spécifiant les fichiers et répertoires à ignorer lors de la gestion de version avec Git.
- `package-lock.json`: Fichier généré par npm pour fixer les versions exactes des dépendances.
- `package.json`: Fichier de configuration de Node.js listant les métadonnées du projet et les dépendances.
- `server.js`: Fichier principal où le serveur Express est configuré et démarré.
## <a name="express"></a> Comprendre express.js
### Les routes
#### Introduction
Les routes est un aspect crucial pour définir le comportement d'une application. Les routes déterminent comment l'application réagit aux requêtes HTTP des clients, en fonction de l'URL demandée et de la méthode HTTP utilisée (GET, POST, etc.).

Voici quelques-unes des méthodes HTTP les plus couramment utilisées :
| Méthode |  description                          |
| :-------: | :----------------------------------------------------------: |
| GET  | Récupérer des données à partir du serveur.  |
| POST   | Soumettre des données au serveur pour traitement ou enregistrement. |
| PUT   | Mettre à jour des données sur le serveur. |
| DELETE   | Supprimer des données sur le serveur. |

> Trouve <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">ici</a> une liste complète des méthodes HTTP
#### Création d'une route
Pour créer une route, Créez un fichier nommé  `utilisateurs.routes.js` dans le dossier `routes`.  Ce fichier sera dédié à la définition des routes spécifiques aux utilisateurs. Veuillez inclure le code suivant :

```js
// utilisateurs.routes.js
const express = require("express")
const utilisateurs_routes = express.Router("")
const utilisateurs_controller = require("../controllers/utilisateurs.controller")

utilisateurs_routes.get("/utilisateurs", utilisateurs_controller.getUtilisateurs)

module.exports = utilisateurs_routes
```
Ce code spécifie une seule route GET `"/utilisateurs"` qui sera gérée par la fonction `getUtilisateurs` du contrôleur des utilisateurs.

### Les controllers
Maintenant apres avoir creer une route, creer un autre fichier `utilisateurs.controller.js` dans le dossier `controllers` qui va contenier les fonctions qui vont agir comme handler pour les routes des utilisteurs:
```js
// utilisateurs.controller.js
const getUtilisateurs = (req, res) => {
     try {
          const utilisateurs = [{
               id: 1,
               nom: "Jean",
               prenom: "Paul"
          }, {
               id: 2
               nom: "Marie",
               prenom: "Rose"
          }]
          res.status(200).json(utilisateurs)
     } catch (error) {
          res.status(500).send("Erreur interne du serveur")
     }
}
module.exports = {
     getUtilisateurs
}
```
Ce code définit une fonction asynchrone  qui simule la récupération d'utilisateurs (à partir d'une base de données ou d'une source de données externe). En cas de succès, elle renvoie une réponse JSON contenant un tableau d'utilisateurs, et en cas d'échec, elle renvoie une réponse avec un statut HTTP 500 et un message d'erreur générique.

> N'oubliez pas d'exporter les fonctions avec `module.exports` afin qu'elles puissent être utilisées ailleurs dans l'application. <a href="https://www.w3schools.com/nodejs/nodejs_modules.asp">Voir les modules</a>

Voici une liste de quelques codes de statut HTTP (codes de réponse) couramment utilisés:

| Code | Statut | Description |
| :-------: | :-------: | :----------------------------------------------------------: |
| 200  | OK | La requête a réussi. C'est le code de statut standard pour les réponses réussies.  |
| 201   | CREATED |  La requête a été correctement traitée, et une nouvelle ressource a été créée en conséquence.  |
| 401   | UNAUTHORIZED  |  L'accès à la ressource est refusé en raison d'absence d'authentification ou d'informations d'identification invalides.  |
| 403   | FORBIDDEN  |  L'accès à la ressource est refusé pour des raisons autres que l'authentification.  |
| 404   | NOT FOUND  |  La ressource demandée n'a pas été trouvée sur le serveur.  |
| 500    | INTERNAL SERVER ERROR  | Erreur générique indiquant qu'une condition inattendue a empêché le serveur de satisfaire la requête..  |
> <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">Liste complet des codes de statut HTTP</a>

### Liaison du point d'entrée et les routes

Maintenant que nous avons créé nos routes et défini les fonctions qui seront appelées lorsqu'elles seront sollicitées, nous allons les configurer dans le fichier `server.js` afin de les rendre identifiables au sein de l'application.

Ainsi, le contenu du fichier `server.js` ressemblera à ceci :
```js
// server.js
const express = require('express');
const utilisateurs_routes = require('./routes/utilisateurs.routes');
const app = express();
const port = 3000;

app.use('/', utilisateurs_routes)

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
```
Dans ce code, `app.use('/', utilisateurs_routes)` montre que les routes définies dans `utilisateurs.routes.js` sont montées sur la racine de l'application.  `'/'` spécifie le chemin de base pour lequel le middleware sera activé. Nous aborderons les middlewares un peu plus tard.

### Tester l'application
Maintenant que tout est configuré, nous pouvons procéder aux tests de notre route. Pour ce faire, démarrez l'application en utilisant la commande suivante :
```
node server.js
```
Une fois l'application démarrée, ouvrez l'extension `Thunder Client`, choisissez la méthode `GET`, puis saisissez l'adresse `http://localhost:3000/utilisateurs`. Vous verrez ainsi une liste des utilisateurs dans la réponse, conformément à ce que nous avons défini dans notre fonction.

### Les middlewares
Les middlewares sont des fonctions qui ont accès à l'objet de requête (req), à l'objet de réponse (res), et à la fonction next dans le cycle de vie de la requête. Ils sont utilisés pour effectuer des opérations telles que la modification des objets de requête et de réponse

On distingue trois types de middlewares:

1. `Middlewares intégrés`: Express offre des middlewares intégrés pour des tâches courantes comme le traitement des données JSON, des formulaires, la gestion des cookies, etc.
2. `Middleware Global`: qui sont exécutés pour chaque requête, indépendamment de la route spécifique.
3. `Les middlewares de route`: qui sont spécifiés pour une route particulière et sont exécutés uniquement lorsque cette route est atteinte.

```js
const express = require('express');
const utilisateurs_routes = require('./routes/utilisateurs.routes');
const app = express();
const port = 3000;

// Middleware intégré pour le traitement des données JSON
app.use(express.json());

// Middleware intégré pour le traitement des formulaires HTML
app.use(express.urlencoded({ extended: true }));

// Middleware global
app.use(monMiddleware);

// Middleware spécifique à une route
app.use('/', utilisateurs_routes)

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
```
> Les middlewares jouent un rôle essentiel dans l'authentification pour vérifier si un utilisateur est correctement authentifié avant de permettre l'accès à certaines routes ou ressources.

### Comprendre la requête et la réponse
Dans Express.js, "req" et "res" sont des abréviations couramment utilisées pour représenter les objets de requête (request) et de réponse (response) dans le contexte d'une application web. Ces objets sont essentiels pour gérer les requêtes HTTP entrantes et générer les réponses correspondantes.
#### La requête
`req (Request)` : Cet objet représente la requête HTTP entrante et contient des informations sur la requête telle que les paramètres de l'URL, les données du corps de la requête(body), les en-têtes(headers), etc. Vous pouvez accéder à ces informations à l'intérieur de vos routes pour prendre des décisions en fonction de la requête.

Exemple d'utilisation dans une route :
```js
app.get('/exemple', (req, res) => {
  // Accéder aux paramètres de l'URL
  const id = req.params.id;

  // Accéder aux données du corps de la requête (si c'est une requête POST)
  const data = req.body;

  // Autres informations disponibles dans l'objet req
  const headers = req.headers;
  const method = req.method;

  // Logique de traitement de la requête ici
});
```
#### La réponse
`res (Response)` : Cet objet représente la réponse HTTP que votre serveur génère et envoie en réponse à la requête. À travers l'objet `res`, vous pouvez définir des en-têtes de réponse, envoyer des données au client, rediriger vers d'autres URL, etc.

Exemple d'utilisation dans une route :
```js
app.get('/exemple', (req, res) => {
  // Envoi d'une réponse simple au client
  res.send('Bonjour, monde!');

  // Envoi de données JSON
  res.json({ message: 'Ceci est un exemple JSON' });

  // Définition d'un code d'état de la réponse
  res.status(200); // OK
});
```

### Nodemon
<a href="https://www.npmjs.com/package/nodemon">nodemon</a> est un utilitaire de surveillance pour les applications Node.js. Il permet de redémarrer automatiquement le serveur Node.js chaque fois qu'un changement est détecté dans les fichiers source de l'application. Cela facilite le processus de développement, car vous n'avez pas besoin de redémarrer manuellement le serveur à chaque modification de code.
Pour utiliser nodemon, vous devez l'installer globalement ou localement dans votre projet, selon vos préférences. Vous pouvez l'installer à l'aide de la commande npm :

```
npm install -g nodemon
```
Ensuite, vous pouvez exécuter votre application Node.js avec nodemon au lieu de node. Par exemple:
```
nodemon server.js
```

Pour simplifier les choses, vous pouvez définir un script `start` dans le fichier `package.json` comme suit:
```json
// pockage.json
{
  "name": "example-api",
  "version": "1.0.0",
  "description": "Mon premier projet express.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "author": "darcy@mediabox.bi",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.3.2",
    "express": "^4.18.2",
    "mysql2": "^3.7.1",
    "sequelize": "^6.35.2",
    "sqlite3": "^5.1.7"
  }
}
```
Maintenant pour démarrer l'application, il suffit d'exécuter la commande :
```
npm run start
```
ou tout simplement
```
npm start
```

### Fichier d'environnement
Un fichier `.env` est souvent utilisé pour stocker des variables d'environnement. Les variables d'environnement sont des valeurs sensibles ou configurables que vous ne souhaitez pas hardcoder dans votre code source.

Pour charger les variables d'environnement à partir du fichier `.env`, vous devez installer le module <a href="https://www.npmjs.com/package/dotenv">dotenv</a>. Vous pouvez le faire en exécutant la commande suivante dans votre terminal :
```
npm install dotenv
```
Créez un fichier appelé `.env` à la racine de votre projet. Ce fichier contiendra vos variables d'environnement, par exemple :

```
PORT = 3000
BD_HOST = localhost
DB_USER = root
DB_PASSWORD = 
DB_NAME = formation_node
```
Au début du fichier où vous souhaitez charger les variables (par exemple, app.js ou autre), ajoutez les lignes suivantes pour charger les variables d'environnement à partir du fichier `.env `:
```js
const dotenv = require('dotenv')
dotenv.config()
```
Par exemple, pour charger le port de l'application à partir du fichier `.env`, le point d'entrée serait le suivant :
```js
// server.js
const express = require('express');
const utilisateurs_routes = require('./routes/utilisateurs.routes');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware spécifique à une route
app.use('/', utilisateurs_routes)

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
```

### Interagir avec une base de données
Commençons par créer une table `utilisateurs` qui nous servira d'exemple. La table comporte trois champs : ID_UTILISATEUR, NOM et PRENOM.
```sql
CREATE TABLE `utilisateurs` (
 `ID_UTILISATEUR` int(11) NOT NULL AUTO_INCREMENT,
 `NOM` varchar(50) NOT NULL,
 `PRENOM` varchar(50) NOT NULL,
 PRIMARY KEY (`ID_UTILISATEUR`)
)
```
#### Requête classique
Dans Node.js, il n'existe pas de moyen intégré pour interagir directement avec les bases de données, ce qui nécessite l'utilisation de bibliothèques tierces pour faciliter cette tâche.

Il existe plusieurs bibliothèques disponibles mais nous utiliserons  <a href="https://sidorares.github.io/node-mysql2/docs">mysql2</a> un pilote très populaire pour MySQL, le SGBD que nous utilisons dans cette formation.

Commencer par installer la bibliothèque en exécutant la commande suivante :
```
npm i mysql2
```
Pour simplifier son utilisation, nous allons créer un fichier `db.js `dans le dossier `utils` et y insérer le code suivant :

```js
// utils/db.js
const { createPool } = require('mysql2/promise')
const dotenv = require('dotenv')

dotenv.config()
var globalPool = undefined
const connection = async () => {
     try {
          if (globalPool) return globalPool
          globalPool = await createPool({
               host: process.env.BD_HOST,
               user: process.env.DB_USER,
               password: process.env.DB_PASSWORD,
               database: process.env.DB_NAME,
               port: process.env.DB_PORT ? process.env.DB_PORT : 3306
          })
          return globalPool
     } catch (error) {
          throw error
     }
}

const query = async (query, values) => {
     const pool = await connection()
     return (await pool.query(query, values))[0]
}

module.exports = {
     connection,
     query
}
```
Ce code permet de se connecter à une base de données en utilisant les identifiants configurés dans le fichier d'environnement `.env`. Il utilise <a href="https://sidorares.github.io/node-mysql2/docs#using-connection-pools">un systeme de pool</a> pour réduire le temps nécessaire à l'établissement d'une connexion au serveur MySQL en réutilisant une connexion précédente.

Maintenant que tout est configuré, nous pouvons récupérer la liste des utilisateurs de la manière suivante :
```js
// utilisateurs.controller.js
const { query } = require("../utils/db")
const getUtilisateurs = async (req, res) => {
     try {
          const utilisateurs = await query("SELECT ID_UTILISATEUR, NOM, PRENOM FROM utilisateurs")
          res.status(200).json(utilisateurs)
     } catch (error) {
          res.status(500).send("Erreur interne du serveur")
     }
}
module.exports = {
     getUtilisateurs
}
```
Dans ce code, nous avons d'abord importé `query` depuis le fichier `db.js` que nous avons créé. Ensuite, nous avons modifié la structure de la fonction en une fonction asynchrone (async) afin qu'elle puisse accepter l'utilisation de `await`.

#### Requête préparée
L'avantage principal des requêtes préparées réside dans leur capacité à prévenir les attaques par injection SQL. En isolant les valeurs des paramètres de la requête SQL, même si ces valeurs sont fournies par l'utilisateur, elles ne peuvent pas altérer la structure de la requête.

Prenons par exemple une situation où l'on doit effectuer une recherche d'un nom dans la table `utilisateurs`, une opération initiée par une saisie fournie par un utilisateur de l'application. La requête serait alors formulée comme suit :

```js
// utilisateurs.controller.js
const { query } = require("../utils/db")
const getUtilisateurs = async (req, res) => {
     try {
          const { nom } = req.query
          const utilisateurs = await query("SELECT ID_UTILISATEUR, NOM, PRENOM FROM utilisateurs WHERE NOM = ?", [nom])
          res.status(200).json(utilisateurs)
     } catch (error) {
          res.status(500).send("Erreur interne du serveur")
     }
}
module.exports = {
     getUtilisateurs
}
```
### Sequelize
<a href="https://sequelize.org/">Sequelize</a> permet de simplifier l'interaction avec les bases de données relationnelles dans des applications Node.js. Elle est principalement utilisée comme ORM (Object-Relational Mapping) pour des bases de données SQL qui facilite la manipulation des données dans la base de données en utilisant des objets JavaScript plutôt que des requêtes SQL directes.

#### Installation et configuration
Pour commencer à utiliser Sequelize, vous devez d'abord l'installer dans votre projet en utilisant la commande suivante :
```
npm install sequelize sqlite3
```
Pour simplifier son utilisation, nous allons également créer un fichier `sequelize.js` dans le dossier `utils`  et y insérer le code suivant :
```js
// utils/sequelize.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()
const sequelize = new Sequelize({
     host: process.env.BD_HOST,
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     port: process.env.DB_PORT ? process.env.DB_PORT : 3306,
     dialect: 'mysql'
})

module.exports = sequelize
```
#### Les modèles 
Les modèles sont des représentations JavaScript des tables dans une base de données relationnelle. Ils sont utilisés pour définir la structure des données et les relations entre les tables.

Dans notre cas, pour créer un modèle pour la table `utilisateurs`, créez un fichier `Utilisateurs.js` dans le dossier models et insérez-y le code suivant :
```js
// models/Utilisateurs.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequerize');

const Utilisateurs = sequelize.define('utilisateurs', {
     ID_UTILISATEUR: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
     },
     NOM: {
          type: DataTypes.STRING(50),
          allowNull: false
     },
     PRENOM: {
          type: DataTypes.STRING(50),
          allowNull: false
     }
}, {
     freezeTableName: true,
     tableName: 'utilisateurs',
     timestamps: false
})

module.exports = Utilisateurs
```
> Convention : les noms de fichiers des modèles commencent toujours par une lettre majuscule.

Maintenant que notre modèle est créé, nous pouvons l'utiliser de la manière suivante pour récupérer la liste des utilisateurs :
```js
const Utilisateurs = require("../models/Utilisateurs")

const getUtilisateurs = async (req, res) => {
     try {
          const utilisateurs = await Utilisateurs.findAll()
          res.status(200).json(utilisateurs)
     } catch (error) {
          res.status(500).send("Erreur interne du serveur")
     }
}

module.exports = {
     getUtilisateurs
}
```
#### Un CRUD avec sequelize
Maintenant que nous avons vu les bases de l'utilisation de Sequelize, réalisons un petit CRUD de la table `utilisateurs`.

Commençons par ajouter dans le fichier `utilisateurs.routes.js` les routes de création, de modification et de suppression d'un utilisateur.

```js
// routes/utilisateurs.routes.js
const express = require("express")
const utilisateurs_routes = express.Router("")
const utilisateurs_controller = require("../controllers/utilisateurs.controller")

utilisateurs_routes.post("/utilisateurs", utilisateurs_controller.creerUtilisateur)
utilisateurs_routes.get("/utilisateurs", utilisateurs_controller.getUtilisateurs)
utilisateurs_routes.get("/utilisateurs/:ID_UTILISATEUR", utilisateurs_controller.findByid)
utilisateurs_routes.put("/utilisateurs/:ID_UTILISATEUR", utilisateurs_controller.modifierUtilisateur)
utilisateurs_routes.delete("/utilisateurs/:ID_UTILISATEUR", utilisateurs_controller.supprimerUtilisateur)

module.exports = utilisateurs_routes
```
Nous avons ajouter le paramètre `:ID_UTILISATEUR` sur les routes de modification et de suppression d'un utilisateur. Cela indique que nous devons récupérer l'ID de l'utilisateur fourni en dernier dans ces routes. En procédant ainsi, nous aurons la possibilité de récupérer ces IDs dans la requête avec `req.params`.

Dans le contrôleur, nous allons passer à la création des fonctions pour chaque route:

```js
// controllers/utilisateurs.controller.js
const Utilisateurs = require("../models/Utilisateurs")

const getUtilisateurs = async (req, res) => {
     try {
          const utilisateurs = await Utilisateurs.findAll()
          res.status(200).json(utilisateurs)
     } catch (error) {
          res.status(500).send("Erreur interne du serveur")
     }
}
const findByid = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          const utilisateur = await Utilisateurs.findOne({
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json(utilisateur)
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const creerUtilisateur = async (req, res) => {
     try {
          const { NOM, PRENOM } = req.body
          const nouveauUtilisateur = await Utilisateurs.create({
               NOM: NOM,
               PRENOM: PRENOM
          })
          res.status(200).json({
               message: "Nouvel utilisateur créé avec succès",
               data: nouveauUtilisateur
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const modifierUtilisateur = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          const { NOM, PRENOM } = req.body
          await Utilisateurs.update({
               NOM: NOM,
               PRENOM: PRENOM
          }, {
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json({
               message: "Utilisateur modifié avec succès",
               data: {
                    ID_UTILISATEUR,
                    NOM,
                    PRENOM
               }
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

const supprimerUtilisateur = async (req, res) => {
     try {
          const { ID_UTILISATEUR } = req.params
          await Utilisateurs.destroy({
               where: {
                    ID_UTILISATEUR: ID_UTILISATEUR
               }
          })
          res.status(200).json({
               message: "L'utilisateur a été supprimé avec succès"
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}

module.exports = {
     getUtilisateurs,
     creerUtilisateur,
     modifierUtilisateur,
     supprimerUtilisateur
}
```

Maintenant que le code est prêt, nous pouvons tester les differentes routes avec `Thunder Client`:

#### Insertion d'un utilisateur
![Insertion d'un utilisateur](https://i.ibb.co/GCDbc4N/Screenshot-2024-03-02-183046.png)
#### Récuperation de la liste utilisateurs
![Récuperation de la liste utilisateurs](https://i.ibb.co/VQJRRCj/Screenshot-2024-03-02-183511.png)
#### Récuperation de la liste des utilisateurs
![Récuperation de la liste utilisateurs](https://i.ibb.co/VQJRRCj/Screenshot-2024-03-02-183511.png)
#### Récuperation d'un utilisateur par ID
![Récuperation d'un seul utilisateur](https://i.ibb.co/gRHyDH9/Screenshot-2024-03-02-184313.png)
#### Modification d'un utilisateur par ID
![Modification d'un utilisateur](https://i.ibb.co/kmXxJtP/Screenshot-2024-03-02-184547.png)
#### Suppression d'un utilisateur par ID
![Suppression d'un utilisateur](https://i.ibb.co/PMqLGCG/Screenshot-2024-03-02-184742.png)

#### Les associations
<a href="https://sequelize.org/docs/v6/core-concepts/assocs/">Les associations en Sequelize</a>
 sont des liens entre différents modèles (tables) dans une base de données relationnelle. Ces associations définissent comment les données de différents modèles sont connectées les unes aux autres. Sequelize offre plusieurs types d'associations, notamment :

- `BelongsTo`: Une association "belongsTo" est utilisée pour indiquer qu'une instance d'un modèle appartient à une autre instance d'un modèle. Par exemple, si vous avez une table "Commentaire" et une table "Utilisateur", vous pourriez définir une association "belongsTo" pour indiquer qu'un commentaire appartient à un utilisateur.

- `HasOne `: Une association "hasOne" est utilisée pour indiquer qu'une instance d'un modèle a exactement une autre instance d'un autre modèle associée. Cela est utile lorsque la relation est de type un à un.

- `HasMany  `: Une association "hasMany" est utilisée pour indiquer qu'une instance d'un modèle peut avoir plusieurs instances d'un autre modèle associé. Cela est souvent utilisé pour les relations un à plusieurs.

Revenons à l'exemple de notre table `utilisateurs` où chaque utilisateur possède un profil provenant d'une autre table appelée `profils`.  Dans ce cas, nous allons créer une nouvelle table pour les profils et stocker l'ID du profil dans la table des utilisateurs en tant que clé étrangère.

```sql
/** Création de la table profils **/
CREATE TABLE `profils` (
 `ID_PROFIL` int(11) NOT NULL AUTO_INCREMENT,
 `NOM_PROFIL` varchar(20) NOT NULL,
 PRIMARY KEY (`ID_PROFIL`)
) 
```
```js
// models/Profils.js

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');

const Profils = sequelize.define('profils', {
     ID_PROFIL : {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
     },
     NOM_PROFIL: {
          type: DataTypes.STRING(20),
          allowNull: false
     }
}, {
     freezeTableName: true,
     tableName: 'profils',
     timestamps: false
})

module.exports = Profils
```

```js
// models/Utilisateurs.hs

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const Profils = require('./Profils');

const Utilisateurs = sequelize.define('utilisateurs', {
     ID_UTILISATEUR: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
     },
     NOM: {
          type: DataTypes.STRING(50),
          allowNull: false
     },
     PRENOM: {
          type: DataTypes.STRING(50),
          allowNull: false
     },
     ID_PROFIL: {
          type: DataTypes.INTEGER,
          allowNull: false
     },
}, {
     freezeTableName: true,
     tableName: 'utilisateurs',
     timestamps: false
})

Utilisateurs.belongsTo(Profils, { as: 'profil', foreignKey: "ID_PROFIL" })

module.exports = Utilisateurs
```

Comme vous pouvez le remarquer, à la fin du modèle `Utilisateurs`, nous avons ajouté une association avec l'autre modèle `Profils`.

Maintenant, lors de la récupération des enregistrements dans la table `utilisateurs`, pour obtenir le profil correspondant, Sequelize propose un paramètre `include` pour réaliser cette opération :

```js
// controllers/utilisateurs.controller.js

const Profils = require("../models/Profils")
const Utilisateurs = require("../models/Utilisateurs")

const getUtilisateurs = async (req, res) => {
     try {
          const utilisateurs = await Utilisateurs.findAll({
               include: {
                    model: Profils,
                    as: 'profil'
               }
          })
          res.status(200).json(utilisateurs)
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}
```
Dans la réponse, il y aura une nouvelle clé `profil` qui contient les informations du profil.

### Validation des données
La validation des données est une étape cruciale dans le développement d'applications, car elle permet de garantir que les données entrantes sont conformes aux attentes et aux règles définies. En Node.js, plusieurs bibliothèques peuvent être utilisées pour la validation des données. L'une des bibliothèques les plus populaires est <a href="https://joi.dev/">Joi</a>.

Pour la suite de cette formation, nous n'utiliserons pas "Joi". Nous disposons d'une classe appelée "Validation" que nous utiliserons pour valider les données. L'avantage de cette classe est sa simplicité et sa facilité d'utilisation, avec la possibilité d'ajouter des validations personnalisées.

Pour l'utiliser, il suffit de créer une nouvelle classe (fichier) appelée Validation.js à l'intérieur du dossier class, situé à la racine du projet, et d'y insérer le code suivant :

```js
const { query } = require("../utils/db");
const moment = require("moment")

class Validation {
     constructor(data, validation, customMessages) {
          this.data = data;
          this.validation = validation;
          this.customMessages = customMessages;
          this.errors = {};
     }
     /**
      * Check if passed data are valid
      *
      * @returns Boolean
      */
     async isValidate() {
          const errors = await this.getErrors()
          return (
               Object.keys(errors).length === 0 &&
               errors.constructor === Object
          );
     }

     /**
      * set new message error
      * @param {string} key - message key
      * @param {string} message - that describe the error
      * @returns {void}
      */
     async setError(key, message) {
          const errors = this.errors[key]
               ? [...this.errors[key], message]
               : [message];
          this.errors = { ...this.errors, [key]: errors };
     }
     /**
      * get message by key
      * @param {string} key - the message key you want to get
      * @returns {string}
      */
     async getError(key) {
          await this.run();
          return this.errors[key];
     }
     /**
      * mark input data as required
      * @param {string} key - the key you want to set as required
      * @param {string} value - the value
      */
     async required(key, intitialValue) {
          try {
               if (!this.validation[key] || !this.validation[key].required) return false
               const value = typeof (intitialValue) == 'string' ? intitialValue ? intitialValue.trim() : '' : intitialValue
               let isInvalid = false
               if (typeof (value) == 'string' || Array.isArray(value)) {
                    if (!value || value === '' || value.length === 0) {
                         isInvalid = true
                    }
               } else if (typeof (value) == 'object' && !Array.isArray(value)) {
                    if (!value) {
                         isInvalid = true
                    }
               } else if (!value) {
                    isInvalid = true
               }
               if (isInvalid) {
                    this.setError(key, this.customMessages?.[key]?.required || `This field is required`)
               }

          } catch (error) {
               throw error
          }
     }

     async length(key, value, params) {
          if (!value) return;
          const [min, max] = params;
          if (min && !max && value.length < min) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.length || `Enter et least ${min} characters`
               );
          } else if (!min && max && value.length > max) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.length ||
                    `You can not exceed ${max} characters`
               );
          } else if (min && max && (value.length < min || value.length > max)) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.length ||
                    `The value of this filed must be between ${min} and ${max}`
               );
          }
     }
     async match(key, value, params) {
          if (!value) return;
          if (this.data[params] !== value) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.match ||
                    `Value does not match the ${params} value`
               );
          }
     }
     async username(key, value) {
          if (!value) return;
          const validUsername = /^[a-zA-Z0-9._]+$/.test(value);
          if (!validUsername || value?.length < 2) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.username ||
                    "Incorrect username (letters, numbers, point or underscore)"
               );
          }
     }
     async email(key, value) {
          if (!value) return;
          const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          if (!validEmail) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.email || "Invalid email"
               );
          }
     }

     async image(key, value, params) {
          if (!value) return;
          const IMAGES_MIMES = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
          if (!IMAGES_MIMES.includes(value.mimetype)) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.image || "Please choose a valid image"
               );
          } else if (params < value.size) {
               const megaBite = (params - 1000000) / 1000000;
               this.setError(
                    key,
                    this.customMessages?.[key]?.size ||
                    `Your image is too large (max: ${megaBite} MB)`
               );
          }
     }

     async fileTypes(key, value, params) {
          if (!value || !value?.mimetype) return;
          const VALID_MIMES = params
          if (!VALID_MIMES.includes(value.mimetype)) {
               this.setError(
                    key,
                    this.customMessages?.[key]?.fileTypes || `Invalid file type(${params.join(', ')})`
               )
          }
     }

     async fileSize(key, value, params) {
          if (!value || !value?.size) return;
          if (params < value.size) {
               const megaBite = (params - 1000000) / 1000000;
               this.setError(
                    key,
                    this.customMessages?.[key]?.fileSize || `File too large (max: ${megaBite} MB)`
               );
          }
     }
     async exists(key, value, params) {
          try {
               if (!value) return
               const [tableName, columnName] = params.split(',')
               const row = (await query(`SELECT ${columnName} FROM ${tableName} WHERE ${columnName} = ?`, [value]))[0]
               if (!row) {
                    this.setError(
                         key,
                         this.customMessages?.[key]?.exists ||
                         `This field is not defined on ${tableName} table`
                    );
               }
          } catch (error) {
               throw error
          }
     }
     async unique(key, value, params) {
          try {
               if (!value) return;
               const [tableName, columnName] = params.split(',')
               const row = (await query(`SELECT ${columnName} FROM ${tableName} WHERE ${columnName} = ?`, [value]))[0]
               if (row) {
                    this.setError(
                         key,
                         this.customMessages?.[key]?.unique ||
                         `The ${columnName} must be unique on ${tableName} table`
                    );
               }
          } catch (error) {
               throw error
          }
     }
     alpha(key, value) {
          if (!value) return
          const pattern = /^[\w\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~\u00C0-\u017F]+$/u
          let isString = pattern.test(value);
          if (!isString) {
               this.setError(key, this.customMessages?.[key]?.alpha || `This field must contains alphanumeric characters only`)
          }
     }
     number(key, value) {
          if (!value) return
          let isnum = /^\d+$/.test(value);
          if (!isnum) {
               this.setError(key, this.customMessages?.[key]?.number || `This field must be a valid number`)
          }
     }
     date(key, value, params) {
          if (!value) return
          const format = params
          let isDate = moment(value, format).isValid()
          if (!isDate) {
               this.setError(key, this.customMessages?.[key]?.date || `This field must be a valid date(${format})`)
          }
     }
     /**lm!
      *
      * run the valiton to check for errors
      */
     async run() {
          for (let key in this.validation) {
               const value = this.getValue(key);
               const [properties, params] = this.getProperties(this.validation[key]);
               try {
                    await Promise.all(properties.map(async (property) => {
                         await this[property](key, value, params?.[property]);
                    }))
               } catch (error) {
                    throw error
               }
          }
     }
     /**
      * get all erros
      * @returns {object | {}}
      */
     async getErrors() {
          return this.errors;
     }

     getProperties(value) {
          switch (typeof value) {
               case "string":
                    return [value.split(","), null];

               case "object":
                    const properties = [];
                    for (let key in value) {
                         properties.push(key);
                    }
                    return [properties, value];

               default:
                    return [value, null];
          }
     }

     getValue(key) {
          return this.data && key ? this.data[key] : null
     }
}
module.exports = Validation;
```

Cette classe comprend des validations couramment utilisées, mais après l'instanciation de la classe, vous avez la possibilité de définir des validations personnalisées.

Une fois que la classe est créée, on pourra l'utiliser dans le contrôleur pour la validation des données, comme dans cet exemple:
```js
// utilisateurs.controller.js
...
const Validation = require("../class/Validation")

const creerUtilisateur = async (req, res) => {
     try {
          const { NOM, PRENOM, ID_PROFIL } = req.body
          const validation = new Validation(req.body, {
               NOM: {
                    required: true,
                    alpha: true,
                    length: [2, 20]
               },
               PRENOM: {
                    required: true,
                    alpha: true,
                    length: [2, 20]
               },
               ID_PROFIL: {
                    required: true,
                    number: true,
                    exists: "profils,ID_PROFIL"
               }
          }, {
               NOM: {
                    required: "Ce champ est obligatoire",
                    alpha: "Le nom doit contenir des caractères alphanumériques",
                    length: "Le nom doit comporter entre 2 et 20 caractères"
               },
               PRENOM: {
                    required: "Ce champ est obligatoire",
                    alpha: "Le prénom doit contenir des caractères alphanumériques",
                    length: "Le prénom doit comporter entre 2 et 20 caractères"
               },
               ID_PROFIL: {
                    required: "Le profil est obligatoire",
                    number: "Ce champ doit contenir un nombre valide",
                    exists: "Le profil n'existe pas"
               }
          })
          await validation.run()
          const isValid = await validation.isValidate()
          if(!isValid) {
               const errors = await validation.getErrors()
               return res.status(422).json({
                    message: "La validation des données a echouée",
                    data: errors
               })
          }
          const nouveauUtilisateur = await Utilisateurs.create({
               NOM: NOM,
               PRENOM: PRENOM,
               ID_PROFIL: ID_PROFIL
          })
          res.status(200).json({
               message: "Nouvel utilisateur créé avec succès",
               data: nouveauUtilisateur
          })
     } catch (error) {
          console.log(error)
          res.status(500).send("Erreur interne du serveur")
     }
}
...
```

La classe `Validation` prend trois paramètres dans son constructeur.

1. `data` : c'est un objet contenant les données à valider.
2. `validation` : c'est un objet précisant les validations que vous spécifiez pour les données passées dans le premier paramètre. Les noms des clés doivent ressembler à celles qui doivent être définies dans l'objet des données à valider, et préciser la validation pour chaque clé.
3. `customMessages` : Par défaut, les messages retournés sont en anglais, mais à l'aide de ce paramètre, vous pouvez changer les messages qui seront retournés pour chaque validation échouée.

Voici une liste des validations par défaut et de leurs significations: 
| Validation | Exemple | Description |
| :-------: | :-------: | :----------------------------------------------------------: |
| required  | target: { required: true } | Précisez que la clé et la valeur à l'intérieur sont obligatoires. |
| length  | target: { length: [1, 2] } | Précisez la taille du champ |
| match  | target: { match: "keyToMatch" } | Vérifier que deux valeurs sont identiques |
| username  | target: { username: true } | Précisez qu'un champ doit avoir un nom d'utilisateur valide (lettres, chiffres, point ou underscore). |
| email  | target: { username: true } | Précisez qu'un champ doit être un email valide |
| image  | target: { image: 1000000 } | Précisez qu'un champ doit être une image valide. 1000000 indique la taille maximale de l'image |
| fileTypes  | target: { fileTypes: ['application/pdf', 'image/jpeg'] } | Précisez qu'un champ doit être un fichier valide entre les types préciser dans le tableau |
| fileSize  | target: { fileSize: 1000000 } | Précisez la taille maximale d'un fichier en octet |
| exists  | target: { exists: "table,colonne" } | Précisez que la valeur d'un champ doit existé dans la table précisé |
| unique  | target: { exists: "table,colonne" } | Précisez que la valeur d'un champ doit être unique sur la table précisé |
| alpha  | target: { exists: true } | Précisez que la valeur d'un champ doit contenir des caractères alphanumériques |
| number  | target: { exists: true } | Précisez que la valeur d'un champ doit être un nombre valide |
| date  | target: { date: "DD/MM/YYYY" } | Précisez que la valeur d'un champ doit être une date au format précisé |
### Upload des fichiers