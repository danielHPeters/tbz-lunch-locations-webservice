DROP DATABASE IF EXISTS tbz_lunch_locations_webservice;
CREATE DATABASE tbz_lunch_locations_webservice CHARACTER SET utf8 COLLATE utf8_general_ci;

USE tbz_lunch_locations_webservice;

CREATE TABLE IF NOT EXISTS `user` (
  `id` VARCHAR (255) NOT NULL,
  `name` VARCHAR (255) NOT NULL,
  `lastName` VARCHAR (255) NOT NULL,
  `firstName` VARCHAR (255) NOT NULL,
  `email` VARCHAR (255) NOT NULL,
  `password` VARCHAR (255) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `location` (
  `id` VARCHAR (255) NOT NULL,
  `lat` DOUBLE NOT NULL,
  `lng` DOUBLE NOT NULL,
  `name` VARCHAR (255) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `rating` (
  `id` VARCHAR (255) NOT NULL,
  `text` VARCHAR (255) NOT NULL,
  `stars` TINYINT UNSIGNED NOT NULL,
  `userId` VARCHAR (255) NOT NULL,
  `locationId` VARCHAR (255) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,


  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  FOREIGN KEY (`locationId`) REFERENCES `location` (`id`)
);
