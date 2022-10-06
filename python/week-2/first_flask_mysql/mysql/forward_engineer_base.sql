-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema card_game
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema card_game
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `card_game` DEFAULT CHARACTER SET utf8 ;
USE `card_game` ;

-- -----------------------------------------------------
-- Table `card_game`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `card_game`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `age` INT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `card_game`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `card_game`.`table1` (
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `card_game`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `card_game`.`cards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `cost` INT NULL,
  `description` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cards_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_cards_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `card_game`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
