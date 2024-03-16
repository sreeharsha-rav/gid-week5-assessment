import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookRequest } from '../../interfaces/book-request.interface';


@Component({
  selector: 'app-add-book-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-book-form.component.html',
  styles: ``
})
export class AddBookFormComponent {
  @Input() addData: { showAddForm: boolean } = { showAddForm: false };
  @Output() newBook = new EventEmitter<BookRequest>();

  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: [''],
      author: [''],
      price: ['']
    });
  }

  toggleAddForm() {
    this.addData.showAddForm = !this.addData.showAddForm;
  }

  addNewBook() {
    let newBook: BookRequest = {
      title: this.addForm.value.title,
      author: this.addForm.value.author,
      price: this.addForm.value.price
    };
    this.newBook.emit(newBook);
  }

}
