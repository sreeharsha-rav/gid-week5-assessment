package com.alltech.org.bookapi.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.alltech.org.bookapi.model.Book;

@Repository
public interface BookRespository extends JpaRepository<Book, Integer> {

}
