import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url_fetchAllBooks = "http://localhost:8080/bookapi/fetchAllBooks";
  
  private url_saveBook = "http://localhost:8080/bookapi/saveBook";
  

  constructor(private http: HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.url_fetchAllBooks);
  }

  saveBook(newBook: Book):Observable<any>{

    return this.http.post(this.url_saveBook, newBook, {responseType: 'text' as 'json'});
  }
}
