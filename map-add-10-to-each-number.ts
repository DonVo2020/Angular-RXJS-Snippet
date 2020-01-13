import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = from([1, 2, 3, 4, 5]);

    source.pipe(map(val => val + 10)).subscribe(x=>console.log(x));
  }
}
