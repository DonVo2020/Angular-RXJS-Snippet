import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const collections = [{ name: 'Test', age: 56, email: 'test@test.com' },
                          { name: 'Joe', age: 41, email: 'joe@joe.com' },
                          { name: 'Doe', age: 32, email: 'doe@doe.com' },
                          { name: 'Joe', age: 56, email: 'joe@joe.com' }]
    from(collections)
      .pipe(distinct(x => x.age))
      .subscribe(y => console.log(y.name + ' is ' + y.age));
  }
}
