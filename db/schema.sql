CREATE DATABASE clothing_db;
USE clothing_db;

CREATE TABLE Outfits (
  id INT NOT NULL AUTO_INCREMENT,
  part VARCHAR(45) NOT NULL,
  category VARCHAR(45) NOT NULL,
  color VARCHAR(45) NOT NULL,
  link VARCHAR(500) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE complete (
  id INT NOT NULL AUTO_INCREMENT,
  top_id INT(10),
  bottom_id INT(10),
  PRIMARY KEY (id)
);