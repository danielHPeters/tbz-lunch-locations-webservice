DROP DATABASE IF EXISTS tbz_lunch_locations_webservice;
CREATE DATABASE tbz_lunch_locations_webservice;

USE tbz_lunch_locations_webservice;

CREATE TABLE IF NOT EXISTS `user` (
  `id` VARCHAR (255) NOT NULL,
  `name` VARCHAR (255) NOT NULL,
  `lastName` VARCHAR (255) NOT NULL,
  `firstName` VARCHAR (255) NOT NULL,
  `email` VARCHAR (255) NOT NULL,
  `password` VARCHAR (255) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `location` (
  `id` VARCHAR (255) NOT NULL,
  `x` VARCHAR (255) NOT NULL,
  `y` VARCHAR (255) NOT NULL,
  `name` VARCHAR (255) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `rating` (
  `id` VARCHAR (255) NOT NULL,
  `userId` VARCHAR (255) NOT NULL,
  `text` VARCHAR (255) NOT NULL,
  `stars` TINYINT UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`) REFERENCES `user` (`id`)
);