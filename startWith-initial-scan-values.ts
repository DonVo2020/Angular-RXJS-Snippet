import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = of('World','Good Bye','All',' !!!');
    source.pipe(startWith('Hello'), scan((acc, curr) => `${acc} ${curr}`))
      .subscribe(x => console.log(x));
  }
}
