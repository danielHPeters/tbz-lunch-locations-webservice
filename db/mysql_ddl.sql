DROP DATABASE IF EXISTS `tbz_lunch_locations_webservice`;
CREATE DATABASE `tbz_lunch_locations_webservice` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `tbz_lunch_locations_webservice`;

CREATE TABLE IF NOT EXISTS `users`
(
  `id`        CHAR(36)     NOT NULL,
  `name`      VARCHAR(255) NOT NULL,
  `lastName`  VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(255) NOT NULL,
  `email`     VARCHAR(255) NOT NULL,
  `password`  VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP    NOT NULL,
  `updatedAt` TIMESTAMP    NOT NULL,

  UNIQUE KEY (`email`),
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `locations`
(
  `id`        CHAR(36)     NOT NULL,
  `lat`       DOUBLE       NOT NULL,
  `lng`       DOUBLE       NOT NULL,
  `name`      VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP    NOT NULL,
  `updatedAt` TIMESTAMP    NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `ratings`
(
  `id`         CHAR(36)         NOT NULL,
  `text`       TEXT             NOT NULL,
  `stars`      TINYINT UNSIGNED NOT NULL,
  `userId`     VARCHAR(255)     NOT NULL,
  `locationId` VARCHAR(255)     NOT NULL,
  `createdAt`  TIMESTAMP        NOT NULL,
  `updatedAt`  TIMESTAMP        NOT NULL,


  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  FOREIGN KEY (`locationId`) REFERENCES `locations` (`id`)
);
