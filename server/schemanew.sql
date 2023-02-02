drop table students;
create table students(
	registration_number numeric(50) primary key,
	first_name varchar,
	last_name varchar,
	password varchar,
	hostel_number numeric(50), 
	phone_number varchar unique,
	email varchar
);

drop table items;
create table items
(
	item_id serial primary key,
	name varchar,
	description varchar,
	price numeric(50),
	category varchar,
	availability varchar,
	image varchar,
	owner_id numeric(50),
	constraint fk_owner foreign key(owner_id) references students(registration_number)
);

drop table messages;
create table messages
(
	sender_id numeric(50),
	receiver_id numeric(50), 
	item_id int,
	message varchar,
	date date,
	constraint fk_sender foreign key(sender_id) references students(registration_number),
	constraint fk_reciever foreign key(receiver_id) references students(registration_number),
	constraint fk_item foreign key(item_id) references items(item_id)
);

select * from students;
select * from items;	
select * from messages;

insert into students
	(registration_number,first_name, last_name,password, hostel_number, phone_number, email)
values
	(2021562, 'Salman','Khan', 'secret',9, 3425, 'saik@gmail.com'),
	(2021061, 'Maaz','Khan','password123',12, 30281, 'ma@gmail.com'),
	(2021660, 'Tafreed','Ahmad','abc1232',3, 09983, 'tafmors@gmail.com'),
	(2021232, 'Haris','Khalid','NewKhan',10, 09634, 'harirsK@gmail.com'),
	(2021526, 'Abdullah','Jujjah','HailHydra',4, 493, 'abj@gmail.com'),
	(2021006, 'Muneeb','Baig','123a123b123',5, 343253, 'saik@gmail.com');
	
insert into items
	(name, description, price, category, availability, image, owner_id)
values
	('Kettle', '1000Watts', 200, 'Electronics', 'True', 'xyslfdasf', 2021562),
	('Mechanical Keyboard', 'RGB lights', 100, 'Electronics', 'True', 'xydfasdfsf', 2021061),
	('Hot Plate', '2000Watts', 250, 'Electronics', 'True', 'asldfje', 2021006),
	('Router', '50MBPS speed', 450, 'Technology', 'True', 'eiufnele', 2021660),
	('Blanket', 'Very Warm', 150, 'Bedding', 'False', 'efldiufje', 2021526),
	('Couch', 'Very Relaxing', 1500, 'Furniture', 'True', 'asdfiejle', 2021660);
	
insert into messages
	(sender_id, receiver_id, item_id, message, date)
values
	(2021562, 2021660, 4, 'How many lan ports does the router have?', current_date),
	(2021660, 2021562, 4, 'It has three ports', current_date),
	(2021006, 2021562, 1, 'What is the capacity of the kettle?', current_date),
	(2021562, 2021006, 1, '2L', current_date),
	(2021232, 2021006, 3, 'How long does it take to cook noodles on it?', current_date),
	(2021006, 2021232, 3, 'Approximatety 20mins', current_date);
	

select i.item_id,
	   i.name as item_name, 
	   i.description, 
	   i.price, 
	   i.category, 
	   i.image, 
	   i.owner_id, 
	   concat(s.first_name, ' ', s.last_name) as owner_name, 
	   s.hostel_number, 
	   s.phone_number 
from items i join students s on i.owner_id = s.registration_number
where i.availability = 'True';

select i.item_id,
	   i.name as item_name, 
	   i.description, 
	   i.price, 
	   i.category, 
	   i.image, 
	   i.owner_id, 
	   concat(s.first_name, ' ', s.last_name) as owner_name, 
	   s.hostel_number, 
	   s.phone_number 
from items i join students s on i.owner_id = s.registration_number
where i.availability = 'False';

select i.item_id,
	   i.name as item_name, 
	   i.description, 
	   i.price, 
	   i.category, 
	   i.image, 
	   i.owner_id, 
	   concat(s.first_name, ' ', s.last_name) as owner_name, 
	   s.hostel_number, 
	   s.phone_number 
from items i join students s on i.owner_id = s.registration_number
where i.price < 200;




drop view available_items;
create or replace view available_items as
select i.item_id,
	   i.name as item_name, 
	   i.description, 
	   i.price, 
	   i.category, 
	   i.image, 
	   i.owner_id, 
	   concat(s.first_name, ' ', s.last_name) as owner_name, 
	   s.hostel_number, 
	   s.phone_number 
from items i join students s on i.owner_id = s.registration_number
where i.availability = 'True';


select * from students;

select * from available_items where item_id = 6;
