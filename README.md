

# Infos Sans Frontière 
-------------

# Introduction : Présentation de l'équipe

## ** WEST COAST MARSEILLE **

##- Audrey (@audreycouture)

##- Jerome (@Jerome)

##- Damien (@damien13005)

##- Maxime (@Maxime)

##- Sam (@sam)


##Fait en pair programming

![alt tag](app/assets/images/Fotolia_50326660_Subscription_Monthly_M.jpg)

-------------

# But de l´exercice

Pour ce Vendredi 8 Juin 2018 dans le cadre du Projet Final de la formation The Hacking Project, nous avons crée un site Web qui présente toutes les actualités des différents pays en les traduisant simultanément. 


Notre cahier des charges :


Avec utilisation de la méthode Agile :  
	1) Réaliser un MVP en ligne fonctionel 
	2) Travail en commun organisé via https://trello.com/
	3) Suivre une User Stories 
	4) Donner de la forme à nos pages en intégrant un template WrapBootstrap
	

------------   



# Consignes d'utilisation

## Tests en local:

Pour ouvrir chaque app et la tester il faut downloader le dossier, se placer dedans dans votre terminal et lancer en commande:

> $ bundle install 


Pour voir la base données exécuter en commande un

> $ rails db:migrate     

> $ rails db:seed

Puis tapez la commande suivante pour tester en local l'appli:

> $ rails server

La vous pouver vous balader sur notre code.

Puis ouvrir le fichier sqlite dans le dossier db de l'app, soit avec dbBrowser soit avec SqliteStudio ou autre et visionner.

et Tester la Version en Localhost en allant dans ton navigateur sur :

> localhost:3000





## Test en ligne:

Aller sur le lien Heroku suivant :

https://infossansfrontiere.herokuapp.com/


------------


# Explications détaillés 


------------- comment le code a été fait : -------------

    1. Nouveau projet Rails : 
        a. $ rails new 
        b. Modif du gemfile (pour integration heroku ) 
    2. Nouveau Repository sur Github
        a. cd dossier
        b. $ git init 
        c. $ git remote
        d. $ git Add . 
        e. $ git commit -m "first commit"
        f. $ git push 
    3. Heroku compatible
        a. $ heroku create
        b. $ git add .
        c. $ git commit -m "heroku"
        d. $ git push heroku master
        e. Succès du site en ligne appelé https://infossansfrontiere.herokuapp.com
    4. Créer un compte Mailjet pour les envois de mails 
        a. Créer un fichier .env avec les clées API de Mailjet
        b. Dans le gitignore rajouter le .env
        c. Sur mailjet, le paramétrer avec le site heroku  
    5. Paramètrer la base de données des utilisateurs 
        a. $ rails generate scaffold user email:string
        b. $ rails db:migrate
        c. Verif heroku comparabilité avec un nouveau push heroku => ok
        d. $ heroku run rails db:migrate => ok
        e. Affichage des routes users : $ rails routes 
        f. Vérification en ligne :   https://infossansfrontiere.herokuapp.com
    6. Configuration des pages en ligne en définissant seulement les routes 
        a. Dans config routes.rb :   
        b. $ verif avec rails routes => ok
        c. Verif avec heroku push (refaire étape 2def et 3bcd) => ok
    7. Ajout de Boostrap
        a. Insertion de Wrapboostrap dans notre application html  
    


# Résultats


A vous de voir !


Merci pour la correction ! 
