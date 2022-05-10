DROP DATABASE IF EXISTS agency_projects;

CREATE DATABASE agency_projects;

USE agency_projects;

-- Tabellen erzeugen
CREATE TABLE category (
  category_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  category_name TEXT
);

CREATE TABLE projects (
  project_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  title TEXT,
  description TEXT,
  url TEXT,
  picture_path TEXT,
  creation_date DATE,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE icon (
  icon_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  icon_class_name TEXT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);

CREATE TABLE subcategory (
  subcategory_id INTEGER PRIMARY KEY NOT NULL auto_increment,
  subcategory_name TEXT,
  category INT,
  FOREIGN KEY (category) REFERENCES category(category_id)
);