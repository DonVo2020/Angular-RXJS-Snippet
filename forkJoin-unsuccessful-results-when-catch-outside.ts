import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    forkJoin(
      of('Hello'),
      of('World').pipe(delay(1000)),
      throwError('This will error')
    ).pipe(catchError(error => of(error))).subscribe(x=>console.log(x));
  }
}
