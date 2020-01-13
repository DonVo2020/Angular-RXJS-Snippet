import { Component, OnInit } from '@angular/core';
import { zip, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const eventTime = eventName => fromEvent(document, eventName).pipe(map(() => new Date()));

    const mouseClickDuration = zip(
      eventTime('mousedown'),
      eventTime('mouseup')
    ).pipe(map(([start, end]) => Math.abs(start.getTime() - end.getTime())));

    mouseClickDuration.subscribe(x => console.log(x));
  }
}
