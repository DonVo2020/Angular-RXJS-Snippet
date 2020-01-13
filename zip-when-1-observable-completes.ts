import { Component, OnInit } from '@angular/core';
import { zip, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = interval(1000);

    zip(source,source.pipe(take(3))).subscribe(x=>console.log(x));

  }
}
