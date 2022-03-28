
## Environnement de développement

### Pré-requis

* JDK 11
* JAKRTA EE
* Docker 
* Angular 12


##  Docker Commands for MySql

```bash

DATABASE_URL="mysql://root:[votre pass]@[IP container mysql]:3306/[nom de la base]?serverVersion=[version mysql]"
pour optenir l\'ip  $ docker inspect mysql | grep IPAddress
pour optenir la version $ docker exec -ti mysql mysql --version
commenter le DSN dans .env


## Lancer l'environnement

```bash
docker run --name mysql -d -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql:8.0.19 
docker run --name phpmyadmin -d -p 8080:80 -e PMA_HOST=mysql phpmyadmin/phpmyadmin:5.0.2 

docker network create my-network
docker network connect my-network mysql
docker network connect my-network phpmyadmin

username : root
password : root


##Description

Pour l'inplementaton du webservice on a travaillé avec jax-rs qui nous permet de généer les webservices donc on a fait un package beans qui contient les entites du projet avec l anotation @JsonbTransient dans le get des foreign key pour qu'il met la séréalisation des donnéés. ensuite on a créé un package service qui contient ApplicationConfig qui est le entry point de l'api  aprés une AbstractFacade qui contient tous les méthodes naisaissaire du get getById count create remove update et les autres services qui héritent de AbstractFacades les methodes la seule difference c'est qu'on détermine le entry point de chaque service.

Pour la Génération du questionaire on a une table questionaire qui contient id reponse et id_competence comme foreign key .Dans le champ reponse on a un objet json qui contient les choix avec un boolean crrect qui true ou false et l id de la question. 

donc on génére une questionaire en dependant de id_competence qui est relié avec un sous domaine qui est relié avec un domaine donc on génére les questionaires juste au compétence du premier neud du graphe.




Pour l'implmentation du graphe on a utilisé la library amcharts js et notre structure du graphe contient le neud et les children avec leur nom link et poids qui est en réalité un points d'une compétence qui est généré à partir du questionaire  .