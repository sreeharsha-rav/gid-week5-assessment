## Week 5 Assessment

Submitted by: **[Sreeharsha Raveendra]**

### Objective

To create a full-stack application for book management. The application will allow users to add, edit, and delete books. The application will also allow users to view books and book details.

- Technologies used: `Spring Boot`, `Angular`, `MySQL`, `JPA`, `Hibernate`, `TypeScript`, `HTML`, `CSS`, `Bootstrap`, `Java`, `Maven`, `Node.js`, `npm`, `Angular CLI`

### Instructions

- Setup the database
  - Create a new database in MySQL
  - Run the SQL script given in `book-query.sql` to create the table and insert data
  - Keep MySQL running
- Goto the `book-api` and setup spring boot application
  - Open the `book-api` in IntelliJ
  - Update the `application.properties` file with your MySQL username and password, and database name
  - Run the application
  - Port is `http://localhost:8080/`
- Check API functionality using Postman
  - Use Postman JSON collection `Week 5 Assessment - Books CRUD.postman_collection.json` to test the API
- Goto the `book-crud-angular` and setup angular application
  - Open the `book-crud-angular` in Visual Studio Code
  - Run the application using `ng serve`
  - Port is `http://localhost:4200/`