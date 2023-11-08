DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE languages (
  language_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  language_name TEXT 
);


CREATE TABLE projects (
  projects_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  title TEXT,
  description TEXT,
  url TEXT,
  picture_path TEXT,
  creation_date DATE
);

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  username varchar(50) NOT NULL,
  password varchar(50) NOT NULL
);



CREATE TABLE projects_languages_relation(
projects_id INTEGER NOT NULL,
language_id INTEGER NOT NULL,
FOREIGN KEY (projects_id) REFERENCES projects(projects_id),
FOREIGN KEY (language_id) REFERENCES languages(language_id),
UNIQUE (projects_id, language_id)
);



INSERT INTO users (username,password) VALUES ('christoph','abc123');
INSERT INTO users (username,password) VALUES ('carlo','abc123');
INSERT INTO projects (title,description,url,picture_path,creation_date) VALUES ('React','Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.','https://github.com','react.png', '2021-05-05');
INSERT INTO projects (title,description,url,picture_path,creation_date) VALUES ('Vue','Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.','https://github.com','vue.png','2020-10-10');
INSERT INTO projects (title,description,url,picture_path,creation_date) VALUES ('PHP Projekt','Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.','https://github.com/0xStoff/php-project','pika.png', '2022-05-13');

INSERT INTO languages (language_name) VALUES ('React');
INSERT INTO languages (language_name) VALUES ('Angular');
INSERT INTO languages (language_name) VALUES ('Vue');
INSERT INTO languages (language_name) VALUES ('HTML');
INSERT INTO languages (language_name) VALUES ('VanillaJS');
INSERT INTO languages (language_name) VALUES ('CSS');
INSERT INTO languages (language_name) VALUES ('C++');
INSERT INTO languages (language_name) VALUES ('C#');
INSERT INTO languages (language_name) VALUES ('Java');
INSERT INTO languages (language_name) VALUES ('Python');
INSERT INTO languages (language_name) VALUES ('PHP');
INSERT INTO languages (language_name) VALUES ('NodeJS');
INSERT INTO languages (language_name) VALUES ('React Native');

INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,1);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,4);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,5);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,6);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,3);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,4);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,5);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,6);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (3,4);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (3,5);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (3,6);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (3,11);
