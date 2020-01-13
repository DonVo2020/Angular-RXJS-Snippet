import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { merge } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const first = interval(3000);
    const second = interval(1500);

    first.pipe(merge(second)).subscribe(x=>console.log(x));
  }
}
