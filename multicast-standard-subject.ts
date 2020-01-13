import { Component, OnInit } from '@angular/core';
import { interval, Subject, ConnectableObservable } from 'rxjs';
import { take, tap, mapTo, multicast } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = interval(2000).pipe(take(5));

    const multi = source.pipe(tap(() => console.log('Side Effect #01')), mapTo('RESULT!')).pipe(multicast(() => new Subject()));

    multi.subscribe(x => console.log(x));
    multi.subscribe(y => console.log(y));
    multi.subscribe(z => console.log(z));

    // subscribe subject to source
    (multi as ConnectableObservable<unknown>).connect();
  }
}
