import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = of(1,2,3,4);
    source.pipe(startWith(-9,-8,-7))
      .subscribe(x => console.log(x));
  }
}
