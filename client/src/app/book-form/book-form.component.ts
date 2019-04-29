import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm = this.fb.group({
    title: ['', [Validators.required]],
    isbn: ['', [Validators.required]],
    keywords: ['', [Validators.required]],
    author: ['', [Validators.required]],
    publisher: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder , private bookservice:BooksService) { }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.bookForm.value)
    this.bookservice.postBooks(this.bookForm.value).subscribe(res => {
    
    });
    
    
  }


  
}
