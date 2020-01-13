import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const subject = new Subject();

    subject.pipe(scan((acc, curr) => Object.assign({}, acc, curr), {})).subscribe(x => console.log('Accumulated object: ', x));

    subject.next({ name: 'Joe' });
    subject.next({ age: 30 });
    subject.next({ gender: 'Gay' });
    subject.next({ programmingLanguage: 'C# .NetCore' });
  }
}
