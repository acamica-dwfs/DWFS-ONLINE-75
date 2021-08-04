CREATE database acamica;
use  acamica;

CREATE TABLE estudiantes (
                             id_estudiante int NOT NULL PRIMARY KEY  AUTO_INCREMENT,
                             nombre varchar(100),
                             email  varchar(100),
                             edad  int
)

    insert into estudiantes (nombre, email, edad)
values ("yulian zapata", "hash.key66@gmail.com", 32)

insert into estudiantes (nombre, email, edad)
values ("aldana", "aldana.sosa@gmail.com", 30)

insert into estudiantes (nombre, email, edad)
values ("pilar", "pilar@gmail.com", 28)

insert into estudiantes (nombre, email, edad)
values ("pilar reales", "pilar.reales@gmail.com", 50)

--  consultas
select  *
from  estudiantes;

SELECT nombre, email
FROM estudiantes;

-- alias
SELECT nombre as personas, email
FROM estudiantes est

SELECT nombre  personas, email correos
FROM estudiantes est

--  where
select  *
from estudiantes
where nombre = 'pilar'

select  *
from estudiantes
where edad <= 30

select  *
from estudiantes
where  nombre ='yulian zapata' and  edad > 30

-- where  con like
select  *
from estudiantes
where  nombre like '%pilar%'

select  *
from estudiantes
where  email like '%pilar%'


select *
from estudiantes
where  activo  = true

select *
from estudiantes
where  activo  = false

-- drop :  eliminar una tabla

drop table estudiantes

-- delete : elimina un registro

delete from  estudiantes  where id_estudiante = 4

SELECT *
from estudiantes;

-- update:  actualizacion

update  estudiantes  SET nombre= "ifrain" WHERE id_estudiante = 8;

UPDATE  estudiantes  set email='ifrain@gmail.com'
WHERE email = 'pilar.reales@gmail.com'


update estudiantes  set activo = false
where  id_estudiante =  9

--  order  : ordenamiento
select *
FROM   estudiantes
where  email like '%gmail.com%'  and edad >= 30
order by edad DESC


-- alter table :  modificacion de la tabla

alter table estudiantes
    add column creacion TIMESTAMP default CURRENT_TIMESTAMP

alter table estudiantes
    add column  activo BOOL default true


--  indices : ayuda a mejorar las busquedas

CREATE UNIQUE INDEX indice_estudiantes_email
ON estudiantes (email) USING HASH;


INSERT INTO estudiante_curso (id_estudiante , id_curso )
values (7, 2)

    use  acamica;

--  fk : llaves foraneas   para agregar restricciones de insercion

ALTER TABLE estudiante_curso
    ADD FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante);


ALTER TABLE estudiante_curso
    ADD FOREIGN KEY (id_curso) REFERENCES cursos(id_curso);

--   uso de join para  cruce   de dos tablas

select id_estudiante_curso  , a.nombre , a.email , c.nombre
from estudiante_curso
         left join estudiantes as a using(id_estudiante)
         left join  cursos as c  using(id_curso)



















