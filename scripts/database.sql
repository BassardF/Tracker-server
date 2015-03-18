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
  `date_reached` DATETIME NULL,
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

INSERT INTO users (name, email, password) VALUES ('Frank', 'f.bassard@gmail.com', 'pwd');

INSERT INTO areas (name, class, side) VALUES ('Pecs', 'pecs', 'front');
INSERT INTO areas (name, class, side) VALUES ('Shoulders', 'shoulders', 'front');
INSERT INTO areas (name, class, side) VALUES ('Biceps', 'biceps', 'front');
INSERT INTO areas (name, class, side) VALUES ('Abs', 'abs', 'front');
INSERT INTO areas (name, class, side) VALUES ('Quadriceps', 'quadriceps', 'front');
INSERT INTO areas (name, class, side) VALUES ('Calves', 'calves', 'front');
INSERT INTO areas (name, class, side) VALUES ('Traps', 'traps', 'front');
INSERT INTO areas (name, class, side) VALUES ('Forearms', 'forearms', 'front');
INSERT INTO areas (name, class, side) VALUES ('Transverses', 'transverses', 'front');
INSERT INTO areas (name, class, side) VALUES ('Obliques', 'obliques', 'front');
INSERT INTO areas (name, class, side) VALUES ('Triceps', 'triceps', 'back');
INSERT INTO areas (name, class, side) VALUES ('Upper-back', 'upper-back', 'back');
INSERT INTO areas (name, class, side) VALUES ('Lower-back', 'lower-back', 'back');
INSERT INTO areas (name, class, side) VALUES ('Hamstrings', 'hamstrings', 'back');
INSERT INTO areas (name, class, side) VALUES ('Glutes', 'glutes', 'back');

INSERT INTO measurements (id, name) VALUES (1, 'Neck');
INSERT INTO measurements (id, name) VALUES (2, 'Shoulder width');
INSERT INTO measurements (id, name) VALUES (3, 'Chest');
INSERT INTO measurements (id, name) VALUES (4, 'Right arm');
INSERT INTO measurements (id, name) VALUES (5, 'Left arm');
INSERT INTO measurements (id, name) VALUES (6, 'Left forearm');
INSERT INTO measurements (id, name) VALUES (7, 'Right forearm');
INSERT INTO measurements (id, name) VALUES (8, 'Waist');
INSERT INTO measurements (id, name) VALUES (9, 'Right thigh');
INSERT INTO measurements (id, name) VALUES (10, 'Left thigh');
INSERT INTO measurements (id, name) VALUES (11, 'Right calf');
INSERT INTO measurements (id, name) VALUES (12, 'Left calf');
INSERT INTO measurements (id, name) VALUES (13, 'Glutes');

INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (42, 13, 58, 13, 1);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (24, 20, 76, 20, 2);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (32, 25, 68, 25, 3);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (22, 27, 33, 30, 4);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (75, 27, 67, 30, 5);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (85, 35, 74, 38, 6);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (15, 35, 26, 38, 7);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (34, 36, 66, 36, 8);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (28, 53, 49, 57, 9);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (72, 53, 51, 57, 10);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (26, 80, 42, 80, 11);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (77, 80, 61, 80, 12);
INSERT INTO lines (x1, y1, x2, y2, measurements_id) VALUES (30, 50, 70, 50, 13);

