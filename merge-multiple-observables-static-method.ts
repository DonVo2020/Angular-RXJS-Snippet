import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const first = interval(3000);
    const second = interval(2000);
    const third = interval(1500);
    const fourth = interval(1000);
    const fifth = interval(500);

    merge(
      first.pipe(mapTo('FIRST')),
      second.pipe(mapTo('SECOND')),
      third.pipe(mapTo('THIRD')),
      fourth.pipe(mapTo('FOURTH')),
      fifth.pipe(mapTo('FIFTH'))
    ).subscribe(x => console.log(x));
  }
}
