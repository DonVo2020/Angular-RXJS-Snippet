import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const sourceOne = of('Hello');
    const sourceTwo = of('World');
    const sourceThree = of('Goodbye');
    const sourceFour = of('World!');

    zip(
      sourceOne.pipe(delay(4000)),
      sourceTwo.pipe(delay(3000)),
      sourceThree.pipe(delay(2000)),
      sourceFour.pipe(delay(1000)),
    ).subscribe(x=>console.log(x));
  }
}
