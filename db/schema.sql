CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(256) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
)