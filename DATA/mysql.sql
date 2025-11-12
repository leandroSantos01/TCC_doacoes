DROP DATABASE IF EXISTS donnet_db;
CREATE DATABASE donnet_db;
USE donnet_db;

CREATE TABLE login (
    id_login             INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email                VARCHAR(50) NOT NULL,
    username             VARCHAR(50) NOT NULL,
    senha                VARCHAR(50) NOT NULL,
    dt_criacao           DATETIME,
    nr_doacoes           INT
);

CREATE TABLE ongs (
    id_ong              INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome                VARCHAR(50),
    email               VARCHAR(50),
    senha               VARCHAR(50),
    endereco            VARCHAR(100),
    contato				VARCHAR(100),
    descricao			VARCHAR(200),
    cnpj                VARCHAR(14),
    categoria           VARCHAR(50),
    dt_criacao          DATETIME,
    doacoes_recebidas   INT
);

CREATE TABLE paginas_ongs (
    id_ong                INT,
    url_image            VARCHAR(999),
    nr_likes            INT,
    FOREIGN KEY (id_ong) REFERENCES ongs(id_ong)
);

CREATE TABLE loginADM (
    id_admin             INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email                VARCHAR(50),
    senha                VARCHAR(50)
);

CREATE TABLE doacoes (
    id_doacao            INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_doador            INT NOT NULL,
    id_ong               INT NOT NULL,
    FOREIGN KEY (id_doador) REFERENCES login(id_login),
    FOREIGN KEY (id_ong) REFERENCES ongs(id_ong)
);