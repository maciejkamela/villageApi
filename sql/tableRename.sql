# Zmiana nazw tabel na angielskie

RENAME TABLE  artykuly to articles;
RENAME TABLE  aktywacja to activation;
RENAME TABLE  galeria to gallery;
RENAME TABLE  galeria_dzialy to gallery_sections;
RENAME TABLE ksiega TO visitors;
RENAME TABLE oferty TO commercials;
RENAME TABLE ogloszenia TO announcements;
RENAME TABLE pks_bus TO timetable;
RENAME TABLE zyczenia TO wishes;

# Zmiana nazw kolumn

ALTER TABLE `kolaczkowo`.`activation`
CHANGE COLUMN `kod_aktywacyjny` `activation_code` VARCHAR(255) NOT NULL DEFAULT '0';

ALTER TABLE articles  ALTER cd DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`articles`
CHANGE COLUMN `autor` `author` VARCHAR(50) NOT NULL DEFAULT '',
CHANGE COLUMN `tytul` `title` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `zajawka` `intro` TEXT NOT NULL,
CHANGE COLUMN `artykul` `article` TEXT NOT NULL;

ALTER TABLE announcements  ALTER cd DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`announcements`
CHANGE COLUMN `ogloszenia` `announcement` VARCHAR(700) NOT NULL ;

ALTER TABLE commercials  ALTER date DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`commercials`
CHANGE COLUMN `kategoria` `category` VARCHAR(255)
CHARACTER SET 'utf8'
COLLATE 'utf8_polish_ci' NOT NULL DEFAULT '',
CHANGE COLUMN `tytul` `title` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `cena` `price` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `miasto` `city` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `telefon` `phone` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `opis` `description` TEXT NOT NULL;

ALTER TABLE `kolaczkowo`.`comments`
CHANGE COLUMN `date` `cd` DATETIME NOT NULL ;
ALTER TABLE `kolaczkowo`.`comments`
CHANGE COLUMN `id_parent` `id_parent` INT(11) NULL,
CHANGE COLUMN `plus` `plus` INT(11) NULL,
CHANGE COLUMN `minus` `minus` INT(11) NULL;

ALTER TABLE gallery  ALTER cd DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`gallery`
CHANGE COLUMN `opis` `description` VARCHAR(255) NOT NULL DEFAULT '',
CHANGE COLUMN `nazwa` `name` VARCHAR(200) NOT NULL DEFAULT '',
CHANGE COLUMN `id_dzial` `id_section` INT(11) NOT NULL;

ALTER TABLE `kolaczkowo`.`gallery_sections`
CHANGE COLUMN `nazwa` `name` VARCHAR(255) NOT NULL DEFAULT '';

ALTER TABLE `kolaczkowo`.`timetable`
CHANGE COLUMN `gdzie` `where` VARCHAR(250) NOT NULL,
CHANGE COLUMN `przez` `through` VARCHAR(250) NOT NULL,
CHANGE COLUMN `godzina` `time` TIME NOT NULL,
CHANGE COLUMN `kierunek` `destination` TINYINT(2) NOT NULL,
CHANGE COLUMN `typ` `type` VARCHAR(250) NOT NULL;

ALTER TABLE `kolaczkowo`.`users`
CHANGE COLUMN `haslo` `password` VARCHAR(100) NOT NULL DEFAULT '',
CHANGE COLUMN `imie` `first_name` VARCHAR(50) NOT NULL DEFAULT '',
CHANGE COLUMN `nazwisko` `last_name` VARCHAR(50) NOT NULL DEFAULT '';

ALTER TABLE visitors  ALTER cd DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`visitors`
CHANGE COLUMN `komentarz` `comment` TEXT NOT NULL;

ALTER TABLE visitors  ALTER cd DROP DEFAULT;
ALTER TABLE `kolaczkowo`.`wishes`
CHANGE COLUMN `zyczenia` `description` TEXT NOT NULL;

# Usuniecie zbednej kolumny id_parent
ALTER TABLE comments
DROP COLUMN id_parent;