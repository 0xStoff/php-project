DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

-- Tabellen erzeugen
CREATE TABLE projects (
  id INTEGER PRIMARY KEY NOT NULL auto_increment,
  project_name TEXT
);

