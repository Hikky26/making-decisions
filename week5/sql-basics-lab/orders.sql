-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
--Made a mistake so i used ALTEr TABLE and Alter Column
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id SERIAL,
    product_name VARCHAR(20),
    product_price INTEGER,
    quantity INTEGER
)

-- Add 5 orders to the orders table.
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (1, 'Shampoo', 12.99, 3),
(2, 'Combs', 2.99, 4),
(2, 'Wig', 35.99, 1),
(3, 'Perfume', 65.99, 2),
(4, 'Hair cream', 8.99, 5);

-- Make orders for at least two different people.
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES (5, 'Chocolate', 1.99, 3),
(6, 'Teddy Bear', 22.99, 1);

-- person_id should be different for different people.
-- Aye ye captain!

-- Select all the records from the orders table.
SELECT *
FROM orders

-- Calculate the total number of products ordered.
SELECT SUM(quantity)
FROM orders

-- Calculate the total order price.
SELECT product_price * quantity as total_order_price
FROM orders

-- Calculate the total order price by a single person_id.
SELECT product_price * quantity as total_order_price, SUM(total_order_price) 
FROM orders
GROUP by person_id