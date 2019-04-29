import { UsersService } from './../users.service';
import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myauthor = ""
  isLoggedIn = false
  username

  constructor(private booksService: BooksService, private authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn
    this.username = this.authService.username

    // this.booksService.getAuthors().subscribe((res: any)=>{
    //   this.authors = res
    // })

    // console.log(this.usersService.getAuthor)

    this.usersService.getAuthor().subscribe( (author :any) => {
      //console.log(author.data[0].notify_author)
      this.myauthor = author.data[0].notify_author
    })

  }
  onSubmit() {
    // console.log(this.myauthor)
    this.usersService.setAuthor(this.myauthor).subscribe((author: any) => {
      //console.log(author.data[0].notify_author)
      alert("saved")
    })
  }
}
