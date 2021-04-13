import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BOOKS_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
  constructor(private http: HttpClient) { }
  
  fetchBooks(phrase: string): Observable<Object> {
    const URL = `${this.BOOKS_SEARCH_URL}${phrase}`
    return this.http.get(URL);
  }




}

