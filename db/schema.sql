CREATE DATABASE burger_db;
USE burger_db;

drop table burgers

CREATE TABLE burgers(
	id int (1) NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	`date` DATETIME NOT NULL,
    PRIMARY KEY (id)
);