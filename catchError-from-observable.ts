import { Component, OnInit } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = throwError('This is an error');

    source.pipe(catchError(error => of(`I caught: ${error}`))).subscribe(x=>console.log(x));
  }
}
