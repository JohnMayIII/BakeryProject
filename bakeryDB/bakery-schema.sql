DROP DATABASE IF EXISTS `bakeryDB`;
CREATE DATABASE `bakeryDB`;
USE `bakeryDB`;

CREATE TABLE goods(
    item_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    item VARCHAR(60) NOT NULL,
    picture TINYTEXT,
    price TINYINT UNSIGNED,
    descrip VARCHAR(200),
    special ENUM('default','feat','discount') DEFAULT 'default',
    CONSTRAINT pk_item PRIMARY KEY (item_id)
);

ALTER TABLE goods 
RENAME COLUMN item_id TO goods_id;
