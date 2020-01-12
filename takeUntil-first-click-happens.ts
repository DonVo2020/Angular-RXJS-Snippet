import { Component, OnInit } from '@angular/core';
import { interval,fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = interval(1000);
    const clicks = fromEvent(document, 'click');
    source.pipe(takeUntil(clicks)).subscribe(x=>console.log(x));
    // output:  interval will stop until you click.
  }
}
