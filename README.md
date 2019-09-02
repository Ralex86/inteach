### Architecture / Backend

Vous intégrez une équipe produit qui a pour objectif de sortir une plateforme SaaS de création de modules de révision. Dans cette optique, vous êtes en charge de définir l’architecture logicielle qui devra supporter les contraintes suivantes:
- Cette plateforme sera utilisée par plusieurs clients. Chaque client aura ses propres utilisateurs et chacun de ces utilisateurs pourra avoir un de ces trois rôles : Admin / Formateur / Apprenant.
- Un module de révision sera composé de X leçons, et chaque leçon sera composée de X cartes.
- Les leçons peuvent avoir différents types : Leçon classique ou Évaluation
- Cette plateforme devra être « scalable » car vous en faites la promo depuis quelque temps déjà et vous vous attendez à avoir un gros pic de connexion à l’ouverture.
- Cette plateforme devra disposer d’une API car par la suite il est envisagé de faire des applications mobiles􏰀
Pour pouvoir parler de l’architecture que vous avez pensé, il faut produire les documents suivants:
- Un diagramme d’entités
- Un diagramme d’architecture avec les différentes briques nécessaires
- Un descriptif des technologies utilisées (infra / back / front) avec une explication de vos choix. A vous d’être assez exhaustif sur les conséquences de vos choix techniques.

#### Partie bonus SQL :
Avec le dump ci-joint montrer comment :
- Récupérer la liste des groupes n’ayant pas d’utilisateurs
- Afficher les utilisateurs avec leurs groupes :
- bonus 1: on voudrait tous les groupes de l’utilisateur dans une seule colonne
- bonus 2: récupérer uniquement les emails commençant par 6 lettres et suivi d’un
ou plusieurs chiffres.
- Retourner la liste des cours publiés, en français qui ont au moins 1 utilisateurs.

### FrontEnd
Développer une petite application web (en JS) pour proposer aux utilisateurs une interface de gestion de modules de formation. Les contraintes sont les suivantes:
- Charger les données depuis une fixture (au moins 5 modules)
- Afficher les modules
- Avoir la possibilité d’ajouter / éditer / supprimer un module
- Si vous souhaitez apporter une touche d’esthétisme à l’ensemble, c’est encore mieux.

Bonus 1 : Utiliser React Bonus 2 : Utiliser Redux Bonus 3 : Utiliser Redux-Saga
