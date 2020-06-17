create database cadastro;
use cadastro;

create table Usuario(
idUsuario int primary key auto_increment,
Login varchar(50),
Senha varchar(50)
);

insert into Usuario values
	(null, 'Vitor23xD', 'Vitor@1234');
    
select * from usuario;