import { Component, OnInit } from '@angular/core';
import { forkJoin, of, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`),5000));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    
    forkJoin(of('Hello'), of('World').pipe(delay(1000)),
      interval(1000).pipe(take(1)),
      interval(2000).pipe(take(2)),
      myPromise('RESULT')
    ).subscribe(val => console.log(JSON.stringify(val)));
  }
}
