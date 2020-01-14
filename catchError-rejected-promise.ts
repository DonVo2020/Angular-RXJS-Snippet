import { Component, OnInit } from '@angular/core';
import { timer, from, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const myBadPromise = () => new Promise((resolve, reject) => reject('Rejected!'));
    const source = timer(1000);

    source
      .pipe(mergeMap(_ => from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))))
      .subscribe(x => console.log(x));
  }
}
