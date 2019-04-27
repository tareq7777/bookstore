import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = []

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    console.log(1);
    this.booksService.getBooks().subscribe((books: any) => {
      console.log("ajax", books)
      this.books = books.data
    })
  }

}
