package com.alltech.org.bookapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.alltech.org.bookapi.model.Book;
import com.alltech.org.bookapi.request.BookRequest;
import com.alltech.org.bookapi.respository.BookRespository;
import com.alltech.org.bookapi.response.BookResponse;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRespository bookRespository;

    public List<BookResponse> getAllBooks() {
        List<Book> books = bookRespository.findAll();
        List<BookResponse> bookResponses = new ArrayList<>();
        for (Book book : books) {
            bookResponses.add(new BookResponse(book.getId(), book.getTitle(), book.getAuthor(), book.getPrice()));
        }
        return bookResponses;
    }

    public BookResponse getBookById(int id) {
        Book book = bookRespository.findById(id).get();
        return new BookResponse(book.getId(), book.getTitle(), book.getAuthor(), book.getPrice());
    }

    public BookResponse addBook(BookRequest bookRequest) {
        Book book = new Book(bookRequest.getId(), bookRequest.getTitle(), bookRequest.getAuthor(), bookRequest.getPrice());
        bookRespository.save(book);
        return new BookResponse(book.getId(), book.getTitle(), book.getAuthor(), book.getPrice());
    }

    public BookResponse updateBook(BookRequest bookRequest) {
        int id = bookRequest.getId();
        Book book = bookRespository.findById(id).get();
        if (book != null) {
            book.setTitle(bookRequest.getTitle());
            book.setAuthor(bookRequest.getAuthor());
            book.setPrice(bookRequest.getPrice());
            bookRespository.save(book);
        }
        return new BookResponse(book.getId(), book.getTitle(), book.getAuthor(), book.getPrice());
    }

    public boolean deleteBook(int id) {
        Book book = bookRespository.findById(id).get();
        if (book != null) {
            bookRespository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}
