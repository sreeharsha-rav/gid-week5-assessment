package com.alltech.org.bookapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.alltech.org.bookapi.response.BookResponse;
import com.alltech.org.bookapi.request.BookRequest;
import com.alltech.org.bookapi.service.BookService;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/books")
public class BookRestController {

    @Autowired
    private BookService bookService;

    @GetMapping("/getAll")
    public List<BookResponse> getAllBooks() {
        return bookService.getAllBooks();
    }
    
    @GetMapping("/get/{id}")
    public BookResponse getBookById(@PathVariable int id) {
        return bookService.getBookById(id);
    }

    @PostMapping("/add")
    public BookResponse addBook(@RequestBody BookRequest bookRequest) {
        return bookService.addBook(bookRequest);
    }

    @PutMapping("/update")
    public BookResponse updateBook(@RequestBody BookRequest bookRequest) {
        return bookService.updateBook(bookRequest);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteBook(@PathVariable int id) {
        return bookService.deleteBook(id);
    }

}
