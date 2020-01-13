import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, forkJoin, concat } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// constants that are used as pointers to some json-data
const BOOKS: string = 'assets/data/books.json';
const AUTHORS: string = 'assets/data/authors.json';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getConcatData(): Observable<any> {
    const authors = this.http.get(AUTHORS).pipe(delay(3000));
    const books = this.http.get(BOOKS).pipe(delay(1000));
    return concat(authors, books);
  }

  getMergeData(): Observable<any> {
    const books = this.http.get(BOOKS).pipe(delay(3000));
    const authors = this.http.get(AUTHORS).pipe(delay(1000));

    return merge(books, authors);
  }

  getForkJoinData(): Observable<any> {
    return forkJoin(
      this.http.get(AUTHORS).pipe(delay(3000)),
      this.http.get(BOOKS)
    ).pipe(map((data: any[]) => {
      let author: any = data[0][0]; // just get the first author from file. can do more with search/filter here.
      let books: any[] = data[1]; // get all
      author.books = books.filter(book => book.author === author.name);
      return author;
    }))
  }
}
