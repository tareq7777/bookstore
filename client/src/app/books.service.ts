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

  headers=new HttpHeaders();
 
  getHeaders():HttpHeaders{
    const headers=new HttpHeaders().set('Content-Type','application/json');
    return headers;
  }

  constructor(private http: HttpClient) {
    this.headers = this.getHeaders()
  }

  getBooks() {
    console.log(url + "books");

    return this.http.get(url + "books", { headers: this.headers} )
  }
  delBooks(id) {
    // console.log(url + "books/"+id);

    return this.http.get(url + "books/"+id, { headers: this.headers} )
  }
  postBooks(params) {
    // console.log(params);

    return this.http.post(url+ "books" ,params , { headers: this.headers} )
  }

  


}
