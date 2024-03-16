import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BooksTableComponent } from './component/books-table/books-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BooksTableComponent
  ],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'book-crud-angular';
}
