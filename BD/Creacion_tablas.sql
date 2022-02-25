create table usuarios (
id int4 not null,
username varchar not null,
pass_word varchar not null,
id_region int4 not null,
name_user varchar not null,
constraint usuarios_pkey primary key (id),
constraint "fk_usuarios_regiones" foreign key ("id_region") references regiones("id") on delete no action on update no action 
);

create table regiones (
id int4 not null,
name_region varchar not null,
constraint regiones_pkey primary key (id) 
)
;
create table criptomonedas (
id int4 not null,
simbolo varchar not null,
nombre varchar not null,
tasa varchar not null,
constraint criptomonedas_pkey primary key (id)
);

create table region_cripto (
id int4 not null,
id_region int4 not null,
id_cripto int4 not null,
constraint region_cripto_pkey primary key (id),
constraint "fk_criptomonedas_region_cripto" foreign key ("id_cripto") references criptomonedas("id") on delete no action on update no action,
constraint "fk_regiones_region_cripto" foreign key ("id_region") references regiones("id") on delete no action on update no action
);

create table usuario_cripto (
id int4 not null,
id_usuario int4 not null,
id_cripto int4 not null,
constraint usuario_cripto_pkey primary key (id),
constraint "fk_criptomonedas_usuario_cripto" foreign key ("id_cripto") references criptomonedas("id") on delete no action on update no action,
constraint "fk_usuarios_usuario_cripto" foreign key ("id_usuario") references usuarios("id") on delete no action on update no action
);

select * from usuarios