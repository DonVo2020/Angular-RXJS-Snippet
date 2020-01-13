import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

// constants that are used as pointers to some json-data
const BOOKS: string = 'assets/data/books.json';
const AUTHORS: string = 'assets/data/authors.json';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getMergeData(): Observable<any> {
    const books = this.http.get(BOOKS).pipe(delay(3000));
    const authors = this.http.get(AUTHORS).pipe(delay(1000));

    return merge(books, authors);
  }
}
