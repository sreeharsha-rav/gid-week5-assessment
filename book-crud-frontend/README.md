# BookCrudAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Structure

The code is structured in the following way:
- `app` folder contains the main application code
- `app/component` folder contains the components
    - `app/component/books-table.component.ts` file contains the books table component
    - `app/component/add-book-form.component.ts` file contains the add book form component
    - `app/component/edit-book-form.component.ts` file contains the edit book form component
    - `app/component/navbar.component.ts` file contains the navbar component
- `app/service` folder contains the services
    - `app/service/book.service.ts` file contains the book service, it is used to make the API calls to the REST API server
- `app/model` folder contains the models
    - `app/model/Book.ts` file contains the book model that is used to represent a book object

### Future Improvements

- Reset forms after adding or editing a book
- Prefill the form with the book details when editing a book
- Abstract the API URL to a configuration file
- Abstract table and form components to a generic standalone component
- Improve architecture to use a state management library
- Add unit tests