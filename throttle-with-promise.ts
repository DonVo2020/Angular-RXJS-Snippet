import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = interval(1000);
    const promise = val => new Promise(resolve => setTimeout(() => resolve(`Resolved: ${val}`), val * 100));

    source
      .pipe(throttle(promise), map(val => `Throttled off Promise: ${val}`))
      .subscribe(x=>console.log(x));
  }
}
