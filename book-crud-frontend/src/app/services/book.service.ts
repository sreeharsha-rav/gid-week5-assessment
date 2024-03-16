import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookRequest } from '../interfaces/book-request.interface';
import { BookResponse } from '../interfaces/book-response.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiURL: string = 'http://localhost:8080/api/books';

  addBookEndpoint: string = '/add';
  getBooksEndpoint: string = '/getAll';
  updateBookEndpoint: string = '/update';
  deleteBookEndpoint: string = '/delete';

  constructor(private http: HttpClient) {}

  addBook(book: BookRequest): Observable<BookRequest> {
    return this.http.post<BookRequest>(`${this.apiURL}${this.addBookEndpoint}`, book);
  }

  getBooks(): Observable<BookResponse[]> {
    return this.http.get<BookResponse[]>(`${this.apiURL}${this.getBooksEndpoint}`);
  }

  updateBook(book: BookResponse): Observable<BookResponse> {
    return this.http.put<BookResponse>(`${this.apiURL}${this.updateBookEndpoint}`, book);
  }

  deleteBook(book: BookResponse): Observable<BookResponse> {
    return this.http.delete<BookResponse>(`${this.apiURL}${this.deleteBookEndpoint}/${book.id}`);
  }

}
