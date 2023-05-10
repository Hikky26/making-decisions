-- Create a table called person that records a person’s id, name, age, height (in cm , city, favorite_color. id should be an auto-incrementing id/primary key (use type: SERIAL)
CREATE TABLE person ( 
    person_id SERIAL PRIMARY KEY, 
    name VARCHAR(20), 
    age INTEGER, 
    height INTEGER, 
    city VARCHAR(20), 
    favorite_color VARCHAR(20));

-- Add 5 different people into the person database. Remember to not include the person_id because it should auto-increment.
INSERT INTO person ( name, age, height, city, favorite_color ) 
VALUES ( 'Ayisha Ali', 8, 136, 'Brooklyn', 'Yellow' ),
('Batata Basri', 54, 152, 'Tokyo', 'Brown'),
('Catar Cowail', 26, 190, 'Boston', 'Red'),
('Kamila Kair', 17, 166, 'Houston', 'Purple'),
('Mezeen Madou', 32, 182, 'Los Angeles', 'Blue');

-- Select all the people in the person table by height from tallest to shortest.
SELECT *
FROM person
ORDER by height desc

-- Select all the people in the person table by height from shortest to tallest.
SELECT *
FROM person
ORDER by height

-- Select all the people in the person table by age from oldest to youngest.
SELECT *
FROM person
ORDER by age desc

-- Select all the people in the person table older than age 20.
SELECT * 
from person
WHERE age > 20

-- Select all the people in the person table that are exactly 18.
SELECT *
FROM person
WHERE age = 18

-- Select all the people in the person table that are less than 20 and older than 30.
SELECT *
FROM person
WHERE age < 20 OR age > 30

-- Select all the people in the person table that are not 27 (use not equals).
SELECT *
FROM person
WHERE age <> 27

-- Select all the people in the person table where their favorite color is not red.
SELECT *
FROM person
WHERE favorite_color <> 'Red'

-- Select all the people in the person table where their favorite color is not red and is not blue.
SELECT *
FROM person
WHERE favorite_color NOT IN( 'Red', 'Blue')

-- Select all the people in the person table where their favorite color is orange or green.
SELECT *
FROM person
WHERE favorite_color IN ('Orange', 'Green')

-- Select all the people in the person table where their favorite color is orange, green or blue (use IN).
SELECT *
FROM person
WHERE favorite_color IN ('Orange','Green','Blue')

-- Select all the people in the person table where their favorite color is yellow or purple (use IN).
SELECT *
FROM person
WHERE favorite_color IN ('Yellow','Purple')




