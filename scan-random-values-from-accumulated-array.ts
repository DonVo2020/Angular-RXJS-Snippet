import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { scan, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    interval(1000).pipe(
        scan((acc, curr) => [...acc, curr], []),
        map(r => r[Math.floor(Math.random() * r.length)]),
        distinctUntilChanged())
      .subscribe(x => console.log(x));
  }
}
