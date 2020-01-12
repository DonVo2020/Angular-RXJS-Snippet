import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = interval(1000);
    source.pipe(throttle(x=> interval(4000)))
      .subscribe(x => console.log(x));
  }
}
