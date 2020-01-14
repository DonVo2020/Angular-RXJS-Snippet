import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = timer(1000);

    const notShareExample = source.pipe(tap(() => console.log('SIDE EFFECT')), mapTo('RESULT'));
    notShareExample.subscribe(x => console.log(x));
    notShareExample.subscribe(y => console.log(y));

    const shareExample = notShareExample.pipe(share());
    shareExample.subscribe(x => console.log(x));
    shareExample.subscribe(y => console.log(y));
  }
}
