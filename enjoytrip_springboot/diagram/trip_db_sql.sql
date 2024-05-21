-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_trip
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_trip
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_trip` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `db_trip` ;

-- -----------------------------------------------------
-- Table `db_trip`.`content_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`content_type` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`content_type` (
  `content_type_id` INT NOT NULL,
  `content_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`content_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`sido`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`sido` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`sido` (
  `sido_code` INT NOT NULL,
  `sido_name` VARCHAR(30) NULL DEFAULT NULL,
  `sido_slogan` VARCHAR(50) NULL,
  `thumbnail` VARCHAR(200) NULL,
  PRIMARY KEY (`sido_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_trip`.`gugun`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`gugun` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`gugun` (
  `gugun_code` INT NOT NULL,
  `gugun_name` VARCHAR(30) NULL DEFAULT NULL,
  `sido_code` INT NOT NULL,
  PRIMARY KEY (`gugun_code`, `sido_code`),
  INDEX `gugun_to_sido_sido_code_fk_idx` (`sido_code` ASC) VISIBLE,
  CONSTRAINT `gugun_to_sido_sido_code_fk`
    FOREIGN KEY (`sido_code`)
    REFERENCES `db_trip`.`sido` (`sido_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_trip`.`attraction_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`attraction_info` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`attraction_info` (
  `content_id` INT NOT NULL,
  `content_type_id` INT NULL DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `addr1` VARCHAR(100) NULL DEFAULT NULL,
  `addr2` VARCHAR(50) NULL DEFAULT NULL,
  `zipcode` VARCHAR(50) NULL DEFAULT NULL,
  `tel` VARCHAR(50) NULL DEFAULT NULL,
  `first_image` VARCHAR(200) NULL DEFAULT NULL,
  `first_image2` VARCHAR(200) NULL DEFAULT NULL,
  `readcount` INT NULL DEFAULT NULL,
  `sido_code` INT NULL DEFAULT NULL,
  `gugun_code` INT NULL DEFAULT NULL,
  `latitude` DECIMAL(20,17) NULL DEFAULT NULL,
  `longitude` DECIMAL(20,17) NULL DEFAULT NULL,
  `mlevel` VARCHAR(2) NULL DEFAULT NULL,
  PRIMARY KEY (`content_id`),
  INDEX `attraction_to_content_type_id_fk_idx` (`content_type_id` ASC) VISIBLE,
  INDEX `attraction_to_sido_code_fk_idx` (`sido_code` ASC) VISIBLE,
  INDEX `attraction_to_gugun_code_fk_idx` (`gugun_code` ASC) VISIBLE,
  CONSTRAINT `attraction_to_content_type_id_fk`
    FOREIGN KEY (`content_type_id`)
    REFERENCES `db_trip`.`content_type` (`content_type_id`),
  CONSTRAINT `attraction_to_gugun_code_fk`
    FOREIGN KEY (`gugun_code`)
    REFERENCES `db_trip`.`gugun` (`gugun_code`),
  CONSTRAINT `attraction_to_sido_code_fk`
    FOREIGN KEY (`sido_code`)
    REFERENCES `db_trip`.`sido` (`sido_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_trip`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`user` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`user` (
  `userid` VARCHAR(8) NOT NULL,
  `password` VARCHAR(10) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `image` VARCHAR(200) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `sido_code` INT NULL DEFAULT NULL,
  `gugun_code` INT NULL DEFAULT NULL,
  `admin` TINYINT NOT NULL DEFAULT '0',
  `refresh_token` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`userid`),
  INDEX `sido_code_idx` (`sido_code` ASC) VISIBLE,
  INDEX `gugun_code_idx` (`gugun_code` ASC) VISIBLE,
  CONSTRAINT `user_to_gugun_code_fk`
    FOREIGN KEY (`gugun_code`)
    REFERENCES `db_trip`.`gugun` (`gugun_code`),
  CONSTRAINT `user_to_sido_code_fk`
    FOREIGN KEY (`sido_code`)
    REFERENCES `db_trip`.`sido` (`sido_code`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`attraction_cart`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`attraction_cart` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`attraction_cart` (
  `content_id` INT NOT NULL,
  `userid` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`content_id`),
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `attraction_cart_to_content_id_fk`
    FOREIGN KEY (`content_id`)
    REFERENCES `db_trip`.`attraction_info` (`content_id`),
  CONSTRAINT `attraction_cart_to_userid_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `db_trip`.`user` (`userid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`attraction_description`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`attraction_description` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`attraction_description` (
  `content_id` INT NOT NULL,
  `homepage` VARCHAR(100) NULL DEFAULT NULL,
  `overview` VARCHAR(10000) NULL DEFAULT NULL,
  `telname` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`content_id`),
  CONSTRAINT `attraction_detail_to_attraciton_id_fk`
    FOREIGN KEY (`content_id`)
    REFERENCES `db_trip`.`attraction_info` (`content_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_trip`.`attraction_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`attraction_detail` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`attraction_detail` (
  `content_id` INT NOT NULL,
  `cat1` VARCHAR(3) NULL DEFAULT NULL,
  `cat2` VARCHAR(5) NULL DEFAULT NULL,
  `cat3` VARCHAR(9) NULL DEFAULT NULL,
  `created_time` VARCHAR(14) NULL DEFAULT NULL,
  `modified_time` VARCHAR(14) NULL DEFAULT NULL,
  `booktour` VARCHAR(5) NULL DEFAULT NULL,
  PRIMARY KEY (`content_id`),
  CONSTRAINT `attraction_detail_to_basic_content_id_fk`
    FOREIGN KEY (`content_id`)
    REFERENCES `db_trip`.`attraction_info` (`content_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_trip`.`board`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`board` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`board` (
  `board_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `userid` VARCHAR(8) NOT NULL,
  `overview` MEDIUMTEXT NOT NULL,
  `regist_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hit` INT NULL DEFAULT '0',
  PRIMARY KEY (`board_id`),
  INDEX `idx_title` (`title` ASC) INVISIBLE,
  INDEX `idx_userid` (`userid` ASC) VISIBLE,
  CONSTRAINT `board_to_userid_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `db_trip`.`user` (`userid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`hotplace`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`hotplace` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`hotplace` (
  `hotplace_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `overview` MEDIUMTEXT NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `userid` VARCHAR(8) NOT NULL,
  `sido_code` INT NULL DEFAULT NULL,
  `gugun_code` INT NULL DEFAULT NULL,
  `like` INT NULL DEFAULT '0',
  `regist_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hotplace_id`),
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  INDEX `sido_code_idx` (`sido_code` ASC) VISIBLE,
  INDEX `gugun_code_idx` (`gugun_code` ASC) VISIBLE,
  CONSTRAINT `hotplace_to_gugun_code_fk`
    FOREIGN KEY (`gugun_code`)
    REFERENCES `db_trip`.`gugun` (`gugun_code`),
  CONSTRAINT `hotplace_to_sido_code_fk`
    FOREIGN KEY (`sido_code`)
    REFERENCES `db_trip`.`sido` (`sido_code`),
  CONSTRAINT `hotplace_to_userid_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `db_trip`.`user` (`userid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`plan`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`plan` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`plan` (
  `plan_id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `start_date` TIMESTAMP NOT NULL,
  `end_date` TIMESTAMP NOT NULL,
  `overview` MEDIUMTEXT NULL DEFAULT NULL,
  `userid` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`plan_id`),
  INDEX `userid_idx` (`userid` ASC) VISIBLE,
  CONSTRAINT `plan_to_userid_fk`
    FOREIGN KEY (`userid`)
    REFERENCES `db_trip`.`user` (`userid`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`plan_days`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`plan_days` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`plan_days` (
  `plan_days_id` INT NOT NULL AUTO_INCREMENT,
  `plan_id` INT NOT NULL,
  PRIMARY KEY (`plan_days_id`),
  INDEX `plan_id_idx` (`plan_id` ASC) VISIBLE,
  CONSTRAINT `plan_days_to_plan_id_fk`
    FOREIGN KEY (`plan_id`)
    REFERENCES `db_trip`.`plan` (`plan_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_trip`.`plan_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db_trip`.`plan_detail` ;

CREATE TABLE IF NOT EXISTS `db_trip`.`plan_detail` (
  `plan_detail_id` INT NOT NULL AUTO_INCREMENT,
  `plan_days_id` INT NOT NULL,
  `content_id` INT NOT NULL,
  `overview` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`plan_detail_id`),
  INDEX `plan_days_id_idx` (`plan_days_id` ASC) VISIBLE,
  INDEX `contentl_id_idx` (`content_id` ASC) VISIBLE,
  CONSTRAINT `plan_detail_to_content_id_fk`
    FOREIGN KEY (`content_id`)
    REFERENCES `db_trip`.`attraction_info` (`content_id`),
  CONSTRAINT `plan_detail_to_plan_days_id_fk`
    FOREIGN KEY (`plan_days_id`)
    REFERENCES `db_trip`.`plan_days` (`plan_days_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
