import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const evenNumbers = Observable.create(function (observer) {
      let value = 0;
      const intervalTemp = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);
      return () => clearInterval(intervalTemp);
    });

    const subscribeTemp = evenNumbers.subscribe(x => console.log(x)); // output: 0, 2, 4, 6, 8

    // Unsubscribe after 10 seconds
    setTimeout(() => {
      subscribeTemp.unsubscribe();
    },10000);
  }
}
