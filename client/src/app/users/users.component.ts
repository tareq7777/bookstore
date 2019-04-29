import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  authors = []

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getAuthors().subscribe((res: any)=>{
      this.authors = res
    })
  }
  onSubmit() {

  }
}
