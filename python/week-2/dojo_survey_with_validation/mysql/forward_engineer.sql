-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dojo_survey_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dojo_survey_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojo_survey_schema` DEFAULT CHARACTER SET utf8 ;
USE `dojo_survey_schema` ;

-- -----------------------------------------------------
-- Table `dojo_survey_schema`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojo_survey_schema`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(45) NULL,
  `favorite_language` VARCHAR(45) NULL,
  `comment` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
