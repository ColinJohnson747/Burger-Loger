CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE Burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
)