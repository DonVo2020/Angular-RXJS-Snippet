import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';
import { every, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const log = console.log;
    const returnCode = request => (Number.isInteger(request) ? 200 : 400);
    const fakeRequest = request => of({ code: returnCode(request) }).pipe(tap(_ => log(request)), delay(1000));
    
    concat(
      fakeRequest(1),
      fakeRequest('Invalid  payload'), // this will be failed because it's not a number or it's a string.
      fakeRequest(2) // this won't execute because fail at a line above and return false (or 400)
    ).pipe(every(e => e.code === 200),
      tap(e => log(`all requests successful:  ${e}`))).subscribe();
  }
}
