import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { every } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = of(1, 2, 3, 4, 5);
    source.pipe(every(x => x % 2 === 0)).subscribe(y => console.log(y));
    // output: false

    const evenSource = of(2, 4, 6, 8, 10);
    evenSource.pipe(every(x => x % 2 === 0)).subscribe(y => console.log(y));
    // output: true
  }
}
