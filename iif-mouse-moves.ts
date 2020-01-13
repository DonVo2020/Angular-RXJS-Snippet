import { Component, OnInit } from '@angular/core';
import { fromEvent, of, iif } from 'rxjs';
import { map, throttleTime, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const top$ = of('I am saying Top, Win !!!');
    const bottom$ = of('Bottom always lose !');

    fromEvent(document, 'mousemove')
      .pipe(
        throttleTime(50),
        filter((move: MouseEvent) => move.clientY < 210),
                map((move: MouseEvent) => move.clientY),
                mergeMap(yCoord => iif(() => yCoord < 110, top$, bottom$)
        )
      ).subscribe(x => console.log(x));
  }
}
