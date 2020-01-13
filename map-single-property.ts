import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = from([{ name: 'Joe', age: 30 }, { name: 'Don', age: 50 }, { name: 'Amy', age: 20 }]);

    source.pipe(map(({name}) => name)).subscribe(x=>console.log(x));
  }
}
