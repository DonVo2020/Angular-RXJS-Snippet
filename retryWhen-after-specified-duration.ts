import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { map, retryWhen, tap, delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = interval(1000);

    source
      .pipe(map(val =>
        {
          if (val > 5) {
            throw val;
          }
          return val;
        }), retryWhen(errors => errors.pipe(tap(val => console.log(`Value ${val} was too high!`)), delayWhen(val => timer(val * 1000)))))
      .subscribe(x=>console.log(x));
  }
}
