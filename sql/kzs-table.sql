CREATE TABLE IF NOT EXISTS `kzs` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `company_name` varchar(60) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(60) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;