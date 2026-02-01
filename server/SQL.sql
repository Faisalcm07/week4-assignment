CREATE TABLE favourite_movies (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT, 
movie TEXT

);
INSERT INTO favourite_movies (name, movie) VALUES ('Hannah','Inception');
INSERT INTO favourite_movies (name, movie) VALUES ('Ross','The Dark Knight');
INSERT INTO favourite_movies (name, movie) VALUES ('Adam','Shrek 2');
INSERT INTO favourite_movies (name, movie) VALUES ('Liam','The lord of the rings');
INSERT INTO favourite_movies (name, movie) VALUES ('Leanna','Spirited Away');