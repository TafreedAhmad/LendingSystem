drop table users;

create table users(
	ID  SERIAL PRIMARY KEY,
	name varchar,
	email varchar,
	password varchar, 
	isAdmin bool
);

select * from users;
-- drop table users;

-- create table users(
-- 	ID  SERIAL PRIMARY KEY,
-- 	name varchar,
-- 	email varchar,
-- 	password varchar, 
-- 	isAdmin bool
-- );

select * from users;

-- create table item_image
-- (
-- 	id serial primary key,
-- 	filename varchar,
-- 	filepath varchar,
-- 	mimetype varchar,
-- 	size int
-- )



-- create table items
-- (
-- 	id serial primary key,
-- 	name varchar,
-- 	description varchar,
-- 	user_id int,
-- 	image_id int,
-- 	CONSTRAINT fk_user
--       FOREIGN KEY(user_id) 
-- 	  REFERENCES users(id),
-- 	CONSTRAINT fk_image
--       FOREIGN KEY(image_id) 
-- 	  REFERENCES item_image(id)
-- )


select * from users;
select * from items;	
select * from item_image;
