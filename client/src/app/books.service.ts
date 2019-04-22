import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../config';

class book {
  
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(url, { headers: this.getHeaders()} )
  }

  getHeaders() {

  }
}
