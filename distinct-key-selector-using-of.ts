import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

interface Person{
  name: string,
  age: number,
  email: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    of<Person>( { name: 'Test', age: 56, email: 'test@test.com' },
                { name: 'Joe', age: 41, email: 'joe@joe.com' },
                { name: 'Doe', age: 32, email: 'doe@doe.com' },
                { name: 'Joe', age: 56, email: 'joe@joe.com' })
      .pipe(distinct((x:Person) => x.name))
      .subscribe(y => console.log(y.name));
  }
}
