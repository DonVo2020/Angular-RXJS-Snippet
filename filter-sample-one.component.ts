import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-sample-one',
  templateUrl: './filter-sample-one.component.html',
})
export class FilterSampleOneComponent implements OnInit {
  ngOnInit() {
    const source = from([{ name: 'Joe', age: 55, email: 'joe@joe.com' },
                          { name: 'Don', age: 25, email: 'don@don.edu' },
                          { name: 'Long', age: 35, email: 'long@long.org' }]);

    source.pipe(filter(person => person.age > 30)).subscribe(val => console.log(JSON.stringify(val)));
  }
}