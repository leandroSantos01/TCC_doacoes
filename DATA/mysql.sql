DROP DATABASE IF EXISTS donnet_db;
CREATE DATABASE donnet_db;
USE donnet_db;

CREATE TABLE 
    login (
        id_login             INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        email                VARCHAR(50) NOT NULL,
        username             VARCHAR(50) NOT NULL,
        senha                VARCHAR(50) NOT NULL,
        dt_criacao           DATETIME
);

CREATE TABLE 
    ongs (
        id_ong              INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nome                VARCHAR(50),
        email               VARCHAR(50),
        endereco            VARCHAR(100),
        cnpj                VARCHAR(14),
        categoria           VARCHAR(50),
        url_image           VARCHAR(500),
        contato             VARCHAR(100),
        descricao           VARCHAR(200),
        cadastro_ativo      BOOLEAN,
        dt_criacao          DATETIME
);

CREATE TABLE loginADM (
    id_admin             INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email                VARCHAR(50),
    senha                VARCHAR(50)
);


INSERT INTO ongs VALUES
    (1,'Cão Sem Dono',null,'Rua Vitor Emanuel, 200, Sacomã, SP',null,'Causa animal','/storage/cao.png','(11) 95471-2195','Criada com o incentivo de tirar o maximo de animais das ruas.',true,null),
    (2,'Instituto Caramelo',null,null,null,'Causa animal','/storage/caramelo.png','Email para adotar: queroadotar@icaramelo.org','ONG brasileira que resgata, trata e disponibiliza animais em situação de risco para adoção.',true,null),
    (3,'Criança Esperanca',null,null,null,'Assistência social','/storage/crianca.png',null,'Criada em 1986 para mobilizar o público em prol dos direitos da criança e do adolescente',true,null),
    (4,'Amigos do Bem',null,'Rua Dr. Gabriel de Resende, 122',null,'Assistência social','/storage/amigos.png','(11) 3019-0107','SO Amigos do Bem é uma ONG brasileira que combate a fome e a miséria no sertão nordestino por meio de projetos de educação, geração de renda e saúde.',true,null),
	(5,'Para Quem Doar',null,null,null,'Assistência social','/storage/doar.png',null,'Uma plataforma que conecta doadores a diversas iniciativas checadas.',true,null);
