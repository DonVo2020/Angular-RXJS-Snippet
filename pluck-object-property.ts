import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = from([{ name: 'Joe', age: 35 }, { name: 'Don', age: 55 }, { name: 'Amy', age: 25 }]);

    source.pipe(pluck('name')).subscribe(x=>console.log(x));
  }
}
