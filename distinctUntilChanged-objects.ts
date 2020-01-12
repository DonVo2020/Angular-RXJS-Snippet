import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const objectOne = { name: 'test', age: 23 };
    const objectTwo = { id: 1, product: 'Computer Laptop', amount: 1022.33 };

    const source = from([objectOne, objectTwo, objectOne, objectOne, objectOne]);
    source.pipe(distinctUntilChanged()).subscribe(x=>console.log(JSON.stringify(x)));
  }
}
