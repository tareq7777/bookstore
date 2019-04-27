import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, AbstractControl, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(1)
  }


  
}
