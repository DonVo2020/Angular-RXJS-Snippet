import { Component, OnInit } from '@angular/core';
import { interval, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = interval(1000);

    source.pipe(mergeMap(val => {
      if (val > 5) {
        return throwError('Error!');
      }
      return of(val);
    }), retry(2)).subscribe({
      next: val => console.log(val),
      error: error => console.log(`${error}: retried 2 times then quit!`)
    });
  }
}
