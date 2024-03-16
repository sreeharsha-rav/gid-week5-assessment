import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookResponse } from '../../interfaces/book-response.interface';

@Component({
  selector: 'app-edit-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './edit-book-form.component.html',
  styles: ``
})

export class EditBookFormComponent {
  @Input() editData!: { currentBook: BookResponse, showEditForm: boolean };
  @Output() saveChanges = new EventEmitter<BookResponse>();

  editForm!: FormGroup;  // form group to create the form

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [''],
      author: [''],
      price: ['']
    });
  }

  toggleEditForm() {
    this.editData.showEditForm = !this.editData.showEditForm;
  }

  // TODO: Implement prefilling the form with the current book details

  saveChangesToBook() {
    this.editData.currentBook.title = this.editForm.value.title;
    this.editData.currentBook.author = this.editForm.value.author;
    this.editData.currentBook.price = this.editForm.value.price;
    this.saveChanges.emit(this.editData.currentBook);
  }

}
