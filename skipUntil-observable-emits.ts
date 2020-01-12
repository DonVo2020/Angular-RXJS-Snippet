import { Component, OnInit } from '@angular/core';
import { interval,timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = interval(1000);
    source.pipe(skipUntil(timer(6000))).subscribe(x=>console.log(x));
  }
}
