import { Component, ViewChild } from '@angular/core';
import { Book } from '../../interfaces/book.interface';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { AddBookFormComponent } from '../add-book-form/add-book-form.component';
import { EditBookFormComponent } from '../edit-book-form/edit-book-form.component';
import { BookRequest } from '../../interfaces/book-request.interface';
import { BookResponse } from '../../interfaces/book-response.interface';

@Component({
  selector: 'app-books-table',
  standalone: true,
  imports: [
    CommonModule,
    AddBookFormComponent,
    EditBookFormComponent
  ],
  templateUrl: './books-table.component.html',
  styles: ``
})
export class BooksTableComponent {
  bookList: BookResponse[] = [];
  editData = { 
    currentBook: {id: 0, title: '', author: '', price: 0}, 
    showEditForm: false 
  };
  addData = { showAddForm: false };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks(); // get all books from the database
  }

  // Method to get all books from the database
  getAllBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        if (data) {
          this.bookList = data;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  viewEditForm(book: Book) {
    this.editData.currentBook = book;
    this.editData.showEditForm = true;
  }

  viewAddForm() {
    this.addData.showAddForm = true;
  }

  // Method to add a new book to the database
  addNewBook(newBook: BookRequest): void {
    // Add to the database
    this.bookService.addBook(newBook).subscribe({
      next: (data) => {
        console.log(data);
        alert('Book added successfully');
        this.getAllBooks();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // Method to update a book in the database
  updateBook(updatedBook: BookResponse) {
    // Update the database
    this.bookService.updateBook(updatedBook).subscribe({
      next: (data) => {
        console.log(data);
        alert('Book updated successfully');
        this.getAllBooks();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // to delete a book from the database
  deleteBook(book: BookResponse) {
    // Remove from the database
    this.bookService.deleteBook(book).subscribe({
      next: (data) => {
        console.log(data);
        alert('Book deleted successfully');
        this.getAllBooks();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


}
