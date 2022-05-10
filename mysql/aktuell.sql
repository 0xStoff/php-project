DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

-- Tabellen erzeugen
CREATE TABLE projects (
  id INTEGER PRIMARY KEY NOT NULL auto_increment,
  project_name TEXT
);


SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;
 
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
#INSERT INTO Users(username,password) VALUES ('carlo','abc123');
#INSERT INTO  Users(username,password) VALUES ('christoph','abc123');
