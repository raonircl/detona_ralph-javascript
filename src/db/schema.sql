create database detona_ralph;

create table playername (
	id serial primary key,
    name char(3) unique
);

create table score (
	id serial primary key,
    score int,
    player_id INT REFERENCES playername(id)
);
