import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const subscription = Observable.create(observer => {
      const id = setTimeout(() => observer.next('Never Log Here because unsubscribe before 5 seconds'), 5000);
      return () => {
        clearTimeout(id);
        console.log('cleared!');
      };
    }).subscribe(x => console.log(x));

    setTimeout(() => subscription.unsubscribe(), 3000);
  }
}
