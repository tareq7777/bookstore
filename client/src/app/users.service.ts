import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../config';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  getAuthor() {
    console.log("my headers are: ", this.headers);
    return this.http.get(url + "users/myauthor", { headers: this.headers })
  }

  setAuthor(author) {
    return this.http.post(url + "users/myauthor", { author: author }, { headers: this.headers })
  }


  headers = new HttpHeaders();

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set("authorization", "asdas " + this.authService.access_token);
    headers.set("Content-Type", "application/json");
    return headers;
  }

  constructor(private http: HttpClient, private authService : AuthService) {
    this.headers = this.getHeaders()
  }



}
