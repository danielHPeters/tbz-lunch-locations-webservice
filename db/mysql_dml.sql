START TRANSACTION;

USE `tbz_lunch_locations_webservice`;

--
-- Database: `tbz_lunch_locations_webservice`
--

--
-- Dumping data for table `location`
--

INSERT INTO `locations` (`id`, `lat`, `lng`, `name`, `createdAt`, `updatedAt`) VALUES
('0a97aa54-1927-41be-a8c8-53ce71aaffe1', 47.383398, 8.535114, 'TBZ Technolino', '2018-06-03', '2018-07-02'),
('f8222cce-f5b3-4376-875b-c59ccfcc541e', 47.385731, 8.531367, 'Migros Limmatplatz', '2018-06-03', '2018-07-02');

--
-- Dumping data for table `user` (For testing purposes, all passwords are 1234)
--

INSERT INTO `users` (`id`, `name`, `lastName`, `firstName`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('37065873-a5f9-4fa0-b2c0-9b608b17e30a', 'TheLegend', 'Cena', 'John', 'john@cena.op', '$2b$08$vSKQjnvg3X//rPf/rtAtEurySUTuPrcsqgiyaWVZP/mYsLagRCXQO', '2018-06-03', '2018-06-03'),
('52fa0cc5-9b79-4930-8362-16d27153fb91', 'GG', 'Anderson', 'GG', 'gg@gg.com', '$2b$08$xDVRB7UGaRICllyRTZ4MwOV2MmBYNyg/L8v3bM26Z8a4X2.23Tkhy', '2018-07-02', '2018-07-02'),
('6af4a971-78b0-4c1a-9f3e-9c9004647d5f', 'TotallyUniqueUsername', 'Derp', 'John', 'john@derp.com', '$2b$08$m0.7hgL0oxDhce1DZvzofeGNuBbESyJ5cvuMCU2hJnZopHeYrBCkS', '2018-07-02', '2018-07-02'),
('85d101a9-6ce4-42a3-954f-686e2e204667', 'Dankster', 'Peters', 'Daniel', 'dankster@danknet.swag', '$2b$08$vSKQjnvg3X//rPf/rtAtEurySUTuPrcsqgiyaWVZP/mYsLagRCXQO', '2018-06-03', '2018-06-03'),
('c2aa51da-b27a-4b2f-81a2-a462d3144916', 'TheRealJoker', 'Francis', 'Polly', 'polly@francis.us', '$2b$08$vSKQjnvg3X//rPf/rtAtEurySUTuPrcsqgiyaWVZP/mYsLagRCXQO', '2018-06-30', '2018-06-30');

--
-- Dumping data for table `rating`
--

INSERT INTO `ratings` (`id`, `text`, `stars`, `userId`, `locationId`, `createdAt`, `updatedAt`) VALUES
('1ec3cb50-f3c1-4542-b072-21578722249d', 'Preeeety good', 4, '37065873-a5f9-4fa0-b2c0-9b608b17e30a', 'f8222cce-f5b3-4376-875b-c59ccfcc541e', '2018-07-02', '2018-07-02'),
('304ec80f-b1bc-4fd2-b93e-bef8bbb7da22', 'Very Good', 5, '52fa0cc5-9b79-4930-8362-16d27153fb91', 'f8222cce-f5b3-4376-875b-c59ccfcc541e', '2018-07-02', '2018-07-02'),
('63252631-cbb9-4d85-9d4b-648a3965970f', 'Baaad', 1, '52fa0cc5-9b79-4930-8362-16d27153fb91', '0a97aa54-1927-41be-a8c8-53ce71aaffe1', '2018-07-02', '2018-07-02'),
('a7d0ebd2-c52f-4f28-8aa5-58df2287a750', 'Could be better.', 1, '6af4a971-78b0-4c1a-9f3e-9c9004647d5f', '0a97aa54-1927-41be-a8c8-53ce71aaffe1', '2018-07-02', '2018-07-02'),
('a91f8f00-7d70-4224-a597-436e7c40d1cf', 'Was ok.', 3, '37065873-a5f9-4fa0-b2c0-9b608b17e30a', '0a97aa54-1927-41be-a8c8-53ce71aaffe1', '2018-06-03', '2018-06-03');

COMMIT;
