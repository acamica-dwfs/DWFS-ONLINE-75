
CREATE database acamica;
use  acamica_dwfs75;

CREATE TABLE pais (
       id_pais int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
       nombre varchar(100)
)

insert into pais(nombre) values('colombia');
insert into pais(nombre) values('argentina');

select *
from pais;



CREATE TABLE estudiantes (
                     id_estudiante int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
                     nombre varchar(100),
                     email  varchar(100),
                     edad  int,
                     id_pais int
)

   insert into estudiantes (nombre, email, edad, id_pais)
values ("yulian zapata", "hash.key66@gmail.com", 32, 1)

insert into estudiantes (nombre, email, edad, id_pais)
values ("aldana", "aldana.sosa@gmail.com", 30, 1)

insert into estudiantes (nombre, email, edad, id_pais)
values ("pilar", "pilar@gmail.com", 28, 2)

insert into estudiantes (nombre, email, edad, id_pais)
values ("pilar reales", "pilar.reales@gmail.com", 50, 2)

ALTER TABLE estudiantes
ADD FOREIGN KEY (id_pais) REFERENCES pais(id_pais);

SELECT *
FROM  estudiantes


SELECT *
FROM  estudiantes
LEFT JOIN pais using(id_pais)

SELECT e.nombre , e.email , p.nombre nombre_pais
FROM  estudiantes as e
LEFT JOIN pais p using(id_pais)


SELECT e.nombre , e.email , p.nombre nombre_pais, e.edad
FROM  estudiantes as e
LEFT JOIN pais p using(id_pais)
WHERE  p.nombre = 'colombia' and e.edad > 10


SELECT e.nombre , e.email , p.nombre nombre_pais, e.edad
FROM  estudiantes as e
LEFT JOIN pais p using(id_pais)
WHERE e.edad > 10
ORDER by edad DESC
limit 3;


CREATE TABLE cursos(
   id_curso int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    nombre varchar(100)
)

insert into cursos(nombre) values('dwfs-75');
insert into cursos(nombre) values('dwfs-78');
insert into cursos(nombre) values('dwfs-tema-1');

SELECT *
from cursos c ;

CREATE  table cursos_estudiantes(
     id_cursos_estudiantes int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
     id_estudiante  int,
     id_curso  int
);


ALTER TABLE cursos_estudiantes
ADD FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante);

ALTER TABLE cursos_estudiantes
ADD FOREIGN KEY (id_curso) REFERENCES cursos(id_curso);

SELECT *
from cursos_estudiantes

insert into cursos_estudiantes(id_estudiante, id_curso)
values(2,1)

insert into cursos_estudiantes(id_estudiante, id_curso)
values(2,3)

insert into cursos_estudiantes(id_estudiante, id_curso)
values(3,1)


SELECT  e.nombre , e.edad , c.nombre
FROM cursos_estudiantes
LEFT JOIN estudiantes e using(id_estudiante)
LEFT JOIN cursos c using(id_curso)
where  e.id_estudiante = 2 and e.nombre = 'aldana'


SELECT  sum(edad)/count(*)
FROM  estudiantes
LEFT JOIN pais using(id_pais)


