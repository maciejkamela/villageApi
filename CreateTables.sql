use kolaczkowo;
# Zmiana silnika bazy danych z MyISAM na InnoDB
alter table aktywacja ENGINE = InnoDB;
alter table artykuly ENGINE = InnoDB;
alter table comments ENGINE = InnoDB;
alter table comments_articles ENGINE = InnoDB;
alter table comments_galleries ENGINE = InnoDB;
alter table galeria ENGINE = InnoDB;
alter table galeria_dzialy ENGINE = InnoDB;
alter table ksiega ENGINE = InnoDB;
alter table oferty ENGINE = InnoDB;
alter table ogloszenia ENGINE = InnoDB;
alter table pks_bus ENGINE = InnoDB;
alter table promotor_articles ENGINE = InnoDB;
alter table promotor_photos ENGINE = InnoDB;
alter table users ENGINE = InnoDB;
alter table zyczenia ENGINE = InnoDB;

# Nowe tabele dla komentarzy artykulow i zdjec
CREATE TABLE comments_articles (
  id         INT                   AUTO_INCREMENT,
  author     INT          NOT NULL,
  comment    VARCHAR(255) NOT NULL,
  plus       INT,
  minus      INT,
  response   VARCHAR(255),
  article_id INT(11)      NOT NULL,
  cd         DATETIME     NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (id),
  FOREIGN KEY (article_id) REFERENCES articles (id),
  FOREIGN KEY (author) REFERENCES users (id)
)
  DEFAULT CHARSET = latin2;

CREATE TABLE comments_galleries (
  id         INT                   AUTO_INCREMENT,
  author     INT          NOT NULL,
  comment    VARCHAR(255) NOT NULL,
  plus       INT,
  minus      INT,
  response   VARCHAR(255),
  gallery_id INT,
  cd         DATETIME     NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (id),
  FOREIGN KEY (gallery_id) REFERENCES gallery (id),
  FOREIGN KEY (author) REFERENCES users (id)
)
  DEFAULT CHARSET = latin2;

CREATE TABLE articles_2_galleries (
  id INT      NOT NULL PRIMARY KEY,
  CONSTRAINT fk_comm_articles FOREIGN KEY (id) REFERENCES comments_articles (id),
  CONSTRAINT fk_comm_galleries FOREIGN KEY (id) REFERENCES comments_galleries (id),
  cd DATETIME NOT NULL
)
  DEFAULT CHARSET = latin2;

# albo, trzymam wszystkie komentarze w tabeli comments, a te dwie trzymaja relacje
# do artykulu/galerii i odpowiedniego komentarza
CREATE TABLE comments_articles (
  id         INT AUTO_INCREMENT,
  article_id INT NOT NULL,
  comment_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (article_id) REFERENCES articles (id),
  FOREIGN KEY (comment_id) REFERENCES comments (id)
)
  DEFAULT CHARSET = latin2;

CREATE TABLE comments_galleries (
  id         INT AUTO_INCREMENT,
  gallery_id INT NOT NULL,
  comment_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (gallery_id) REFERENCES gallery (id),
  FOREIGN KEY (comment_id) REFERENCES comments (id)
)
  DEFAULT CHARSET = latin2;