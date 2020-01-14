import { Component, OnInit } from '@angular/core';
import { groupBy, toArray, mergeMap } from 'rxjs/operators';
import { from, zip, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const people = [{ name: 'Sue', age: 25, gender: 'female' },
      { name: 'Doe', age: 55, gender: 'Gay' },
      { name: 'Don', age: 25, gender: 'male' },
      { name: 'Amy', age: 25, gender: 'Lesbian' },
      { name: 'John', age: 35, gender: 'male' }];

    const source = from(people);

    source
      .pipe(groupBy(a => a.age, b=>b.name), mergeMap(group => zip(of(group.key),group.pipe(toArray()))))
      .subscribe(x => console.log(JSON.stringify(x)));
  }
}
