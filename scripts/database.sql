DROP TABLE IF EXISTS `areas` ;

CREATE TABLE IF NOT EXISTS `areas` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` VARCHAR(45) NULL,
  `class` VARCHAR(45) NULL,
  `side` VARCHAR(45) NULL)
;

DROP TABLE IF EXISTS `users` ;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL)
;

DROP TABLE IF EXISTS `exercices` ;

CREATE TABLE IF NOT EXISTS `exercices` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_exercices_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `workouts` ;

CREATE TABLE IF NOT EXISTS `workouts` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `goal` VARCHAR(45) NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_workouts_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `schedules` ;

CREATE TABLE IF NOT EXISTS `schedules` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `date` DATETIME NULL,
  `workouts_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_schedules_workouts1`
    FOREIGN KEY (`workouts_id`)
    REFERENCES `workouts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_schedules_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `workouts-exercices` ;

CREATE TABLE IF NOT EXISTS `workouts-exercices` (
  `id`  INTEGER PRIMARY KEY AUTOINCREMENT,
  `rest` INT NULL,
  `count` INT NULL,
  `reps` VARCHAR(45) NULL,
  `weight` INT NULL,
  `exercices_id` INT NOT NULL,
  `workouts_id` INT NOT NULL,
  CONSTRAINT `fk_set_exercices1`
    FOREIGN KEY (`exercices_id`)
    REFERENCES `exercices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_set_workouts1`
    FOREIGN KEY (`workouts_id`)
    REFERENCES `workouts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `schedules-exercices` ;

CREATE TABLE IF NOT EXISTS `schedules-exercices` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `count` INT NULL,
  `rest` INT NULL,
  `reps` VARCHAR(45) NULL,
  `weight` INT NULL,
  `date` DATETIME NULL,
  `exercices_id` INT NOT NULL,
  `schedules_id` INT NOT NULL,
  CONSTRAINT `fk_record_exercices1`
    FOREIGN KEY (`exercices_id`)
    REFERENCES `exercices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_schedules-exercices_schedules1`
    FOREIGN KEY (`schedules_id`)
    REFERENCES `schedules` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `bodyweight` ;

CREATE TABLE IF NOT EXISTS `bodyweight` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `weight` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_bodyweight_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `bodyfat` ;

CREATE TABLE IF NOT EXISTS `bodyfat` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `percent` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_bodyfat_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `bodyweight-goals` ;

CREATE TABLE IF NOT EXISTS `bodyweight-goals` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `weight` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `date_reached` DATETIME NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_bodyweightgoal_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;


DROP TABLE IF EXISTS `bodyfat-goals` ;

CREATE TABLE IF NOT EXISTS `bodyfat-goals` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `percent` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `date_reached` DATETIME NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_bodyfatgoal_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `measurements` ;

CREATE TABLE IF NOT EXISTS `measurements` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` VARCHAR(45) NULL)
;

DROP TABLE IF EXISTS `user-measurements` ;

CREATE TABLE IF NOT EXISTS `user-measurements` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `value` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `measurements_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_user-measurements_measurements1`
    FOREIGN KEY (`measurements_id`)
    REFERENCES `measurements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user-measurements_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `measurement-goals` ;

CREATE TABLE IF NOT EXISTS `measurement-goals` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `value` DECIMAL(256) NULL,
  `date` DATETIME NULL,
  `side` VARCHAR(45) NULL,
  `measurements_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_measurement-goals_measurements1`
    FOREIGN KEY (`measurements_id`)
    REFERENCES `measurements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_measurement-goals_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `lines` ;

CREATE TABLE IF NOT EXISTS `lines` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `x1` INT NULL,
  `y1` INT NULL,
  `x2` INT NULL,
  `y2` INT NULL,
  `measurements_id` INT NOT NULL,
  CONSTRAINT `fk_lines_measurements1`
    FOREIGN KEY (`measurements_id`)
    REFERENCES `measurements` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `exercices_has_areas` ;

CREATE TABLE IF NOT EXISTS `exercices_has_areas` (
  `exercices_id` INT NOT NULL,
  `areas_id` INT NOT NULL,
  PRIMARY KEY (`exercices_id`, `areas_id`),
  CONSTRAINT `fk_exercices_has_areas_exercices1`
    FOREIGN KEY (`exercices_id`)
    REFERENCES `exercices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exercices_has_areas_areas1`
    FOREIGN KEY (`areas_id`)
    REFERENCES `areas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;

DROP TABLE IF EXISTS `performance-goals` ;

CREATE TABLE IF NOT EXISTS `performance-goals` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `count` INT NULL,
  `rest` INT NULL,
  `weight` INT NULL,
  `date` DATETIME NULL,
  `reps` VARCHAR(45) NULL,
  `date-reached` DATETIME NULL,
  `exercices_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  CONSTRAINT `fk_performance-goals_exercices1`
    FOREIGN KEY (`exercices_id`)
    REFERENCES `exercices` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_performance-goals_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
;
