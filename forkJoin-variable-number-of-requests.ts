import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`),5000));

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = of([1, 2, 3, 4, 5]);
    source.pipe(mergeMap(q=>forkJoin(...q.map(myPromise)))).subscribe(x=>console.log(x));
  }
}
