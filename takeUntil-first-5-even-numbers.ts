import { Component, OnInit } from '@angular/core';
import { interval,fromEvent } from 'rxjs';
import { takeUntil, filter, scan, withLatestFrom, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = interval(1000);
    const isEven = val => val % 2 === 0;
    const evenSource = source.pipe(filter(isEven));
    const evenNumberCount = evenSource.pipe(scan((acc, _) => acc + 1, 0));
    const fiveEvenNumbers = evenNumberCount.pipe(filter(x => x > 5));

    evenSource
      .pipe(withLatestFrom(evenNumberCount), map(([val, count]) => `Even Number (${count}) : ${val}`),takeUntil(fiveEvenNumbers))
      .subscribe(x => console.log(x));
  }
}
