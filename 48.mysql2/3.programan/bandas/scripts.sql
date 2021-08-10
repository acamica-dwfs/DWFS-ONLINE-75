use bandas

create table bandas (
	id_banda int not null primary key auto_increment,
	nombre varchar(100),
	integrantes int,
	fecha_inicio date,
	fecha_separacion date,
	pais varchar(100),
	URLimg MEDIUMBLOB
)

select * from bandas

create table canciones (
	id_cancion int not null primary key auto_increment,
	nombre varchar(100),
	duracion int,
	album varchar(100),
	banda varchar(100),
	fecha_publicacion date
)

select * FROM canciones

create table albumes (
	id_album int not null primary key auto_increment,
	nombre_album varchar(100),
	banda varchar(100),
	fecha_publicacion date
)

select * FROM canciones

ALTER TABLE `bandas` CHANGE COLUMN `imgURL` `URLimg` MEDIUMBLOB
 
ALTER TABLE `bandas` CHANGE COLUMN `integrantes` `Nº_integrantes` varchar(100)
  
ALTER TABLE `bandas` CHANGE COLUMN `fecha_inicio` `fecha_start` varchar(100)
  
ALTER TABLE `bandas` CHANGE COLUMN `fecha_separacion` `fecha_end` varchar(100)

ALTER TABLE `canciones` CHANGE COLUMN `duracion` `tiempo_duracion` varchar(100)
    
ALTER TABLE `canciones` CHANGE COLUMN `fecha_publicacion` `fecha_public` varchar(100)    

TRUNCATE bandas

drop table bandas




