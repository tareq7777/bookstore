import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './book-form/book-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'add', component: BookFormComponent },
  { path: 'intrest', component: UsersComponent },
  // { path: 'book/:id', component: HeroDetailComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookFormComponent,
    PageNotFoundComponent,
    UsersComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
