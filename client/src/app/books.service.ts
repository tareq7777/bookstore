import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config';
import { Observable } from 'rxjs';

class Book {
  id
  title
  isbn
  keywords
  publisher
  author
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  headers

  constructor(private http: HttpClient) {
    this.headers = this.getHeaders()
  }

  getBooks() {
    console.log(url + "books");

    return this.http.get(url + "books", { headers: this.headers} )
  }

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return headers
  }


}
