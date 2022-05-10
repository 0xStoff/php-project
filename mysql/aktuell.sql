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
INSERT INTO projects (title) VALUES ('React');
INSERT INTO projects (title) VALUES ('Vue');

INSERT INTO languages (language_name) VALUES ('React');
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
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,2);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (1,3);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,1);
INSERT INTO projects_languages_relation (projects_id, language_id) VALUES (2,3);
