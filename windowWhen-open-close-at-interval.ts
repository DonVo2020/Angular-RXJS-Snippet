import { Component, OnInit } from '@angular/core';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  ngOnInit() {

      const source = timer(0, 1000);
      source.pipe(
        windowWhen(() => interval(5000)),
        tap(_ => console.log('NEW WINDOW!'))
      ).pipe(mergeAll()).subscribe(val => console.log(val));
  }
}
