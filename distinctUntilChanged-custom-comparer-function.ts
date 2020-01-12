import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = from([{ name: 'John' }, { name: 'Doe' }, { name: 'Joe' }, { name: 'Joe' }, { name: 'Don' }]);
    source.pipe(distinctUntilChanged((prev, curr) => prev.name == curr.name)).subscribe(console.log);
  }
}
