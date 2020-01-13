import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = of(1, 2, 3, 4, 5);
    source.pipe(scan((acc,curr) => acc + curr, 0)).subscribe(x=>console.log(x));
  }
}
