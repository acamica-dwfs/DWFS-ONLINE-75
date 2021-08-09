create  database  IF NOT EXISTS  resto

use resto

--   cracion de la  tabla
create table  IF NOT EXISTS  restaurant (
                            ID_RESTO INT not null primary key auto_increment,
                            ID_USER INT,
                            NOM_RESTO varchar(100),
                            ADRESSE varchar(100),
                            TELEPHONE varchar(100),
                            DESCRIPTIF varchar(100),
                            IMAGE varchar(100),
                            DATE_DERNIERE_MODIF timestamp,
                            ACTIF bool
)


