show databases;
use spring_test;

show tables;
DROP TABLE IF EXISTS books;

-- Create the books table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    price DECIMAL(10, 2)
);

-- Insert demo records into the books table
INSERT INTO books (title, author, price) VALUES
    ('The Great Gatsby', 'F. Scott Fitzgerald', 12.99),
    ('To Kill a Mockingbird', 'Harper Lee', 10.49),
    ('1984', 'George Orwell', 9.99),
    ('Pride and Prejudice', 'Jane Austen', 11.29),
    ('The Catcher in the Rye', 'J.D. Salinger', 8.79),
    ('The Hobbit', 'J.R.R. Tolkien', 14.99),
    ('Animal Farm', 'George Orwell', 7.99),
    ('The Lord of the Rings', 'J.R.R. Tolkien', 19.99),
    ('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 16.49),
    ('The Chronicles of Narnia', 'C.S. Lewis', 13.79);

SELECT * FROM books;