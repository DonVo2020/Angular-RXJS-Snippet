import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const source = throwError('This is an error');

    source.subscribe({
      next: val => console.log(val),
      complete: () => console.log('Complete!'),
      error: error => console.log(`Error: ${error}`)
    });
  }
}
