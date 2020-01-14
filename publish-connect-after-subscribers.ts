import { Component, OnInit } from '@angular/core';
import { interval, ConnectableObservable } from 'rxjs';
import { tap, publish } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = interval(1000);
    const publishTemp = source.pipe(tap(_ => console.log('Publish Something!')), publish());
    publishTemp.subscribe(val => console.log(`Subscriber One: ${val}`));
    publishTemp.subscribe(val => console.log(`Subscriber Two: ${val}`));

    // call connect after 5 seconds, then emitting items
    setTimeout(() => { (publishTemp as ConnectableObservable<any>).connect(); },5000);
  }
}
