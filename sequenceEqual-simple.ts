import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { sequenceEqual, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const expectedSequence = from([4, 5, 6]);

    of([1, 2, 3], [4, 5, 6], [7, 8, 9])
      .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
      .subscribe(console.log);
    // output: false, true, false
  }
}
