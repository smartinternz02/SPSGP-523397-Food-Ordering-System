create database mydb;
create table mydb.department(departmentId varchar(4), departmentName varchar(20), primary key(departmentId));
create table mydb.student(regno int, studentName varchar(20), departmentId varchar(4), studentAge int, primary key(regno), foreign key(departmentId) references department(departmentId));
create table mydb.faculty(id int, facultyName varchar(20), departmentId varchar(4), primary key(id), foreign key(departmentId) references department(departmentId));

insert into mydb.department values("cse", "Computer Science");
insert into mydb.department values("mech", "Mechanical");
insert into mydb.department values("bio", "Biotechnology");
select * from mydb.department;

insert into mydb.student values(1, "Meena", "cse", 20);
insert into mydb.student values(2, "Saloni", "bio", 21);
insert into mydb.student values(3, "Akshad", "mech", 19);
select * from mydb.student;

insert into mydb.faculty values(1, "Deepa", "bio");
insert into mydb.faculty values(2, "Manoj", "cse");
insert into mydb.faculty values(3, "Priya", "mech");
select * from mydb.faculty;

alter table mydb.student add column marks int;
update mydb.student set marks=90 where regno=1;
update mydb.student set marks=87 where regno=2;
update mydb.student set marks=83 where regno=3;
select * from mydb.student;

select faculty.id, faculty.facultyName, department.departmentName from mydb.department join mydb.faculty on department.departmentId=faculty.departmentId;
select * from mydb.department left join mydb.faculty on department.departmentId=faculty.departmentId;
select * from mydb.department right join mydb.faculty on department.departmentId=faculty.departmentId;
select * from mydb.department full join mydb.faculty;

create table mydb.temp(sno int, name varchar(10), primary key(sno));
insert into mydb.temp values(1, "first");
insert into mydb.temp values(2, "second");
insert into mydb.temp values(3, "third");
select * from mydb.temp;
delete from mydb.temp where sno=2;
select * from mydb.temp;
drop table mydb.temp;