CREATE DATABASE DossieSimon;

USE DossieSimon;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE post (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE voto (     
	idVoto INT PRIMARY KEY AUTO_INCREMENT,     
    personagem VARCHAR(45),     
    fk_usuario INT,
	CONSTRAINT fk_voto_usuario FOREIGN KEY (fk_usuario)          
	REFERENCES usuario(id) 
  );
  
CREATE TABLE quiz (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,               
    total_perguntas INT,         
    data_tentativa DATETIME DEFAULT CURRENT_TIMESTAMP, 
	fk_usuario INT,
	CONSTRAINT fk_quiz_usuario FOREIGN KEY (fk_usuario)          
	REFERENCES usuario(id)
);
