.\psql -U postgres

create database node_postgres;

\l

\connect node_postgres

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

\dt

.\psql \! chcp 1251

select * from person;