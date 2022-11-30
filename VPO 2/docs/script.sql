drop database if exists Cursos;
create database Cursos charset=UTF8 collate utf8_general_ci;
use Cursos;

create table alunos(
    id integer primary key auto_increment,
	nome varchar(50) not null,
    nascimento varchar(20) not null
);

create table cursos( 
	id integer primary key auto_increment,
	curso varchar(50) not null,
    duracao varchar(20) not null
);

create table cursados( 
	aluno integer not null,
	curso integer not null,
    data varchar(20) not null,
    foreign key (aluno) references alunos(id) ON DELETE CASCADE,
    foreign key (curso) references cursos(id) ON DELETE CASCADE
);

create view vw_alunos as
select cu.data, a.id as idAluno, a.nome, a.nascimento, c.id as idCurso, c.curso, c.duracao  from alunos a 
left join cursados cu on a.id = cu.aluno
left join cursos c on c.id = cu.curso;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Desktop/VPO 2/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Desktop/VPO 2/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/DESENVOLVIMENTO/Desktop/VPO 2/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;