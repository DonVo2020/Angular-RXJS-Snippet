import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    Observable.create(function (observer) {
      observer.next('Hello');
      observer.next('World');
      observer.next('!!!');
      observer.complete();
    }).subscribe(x=>console.log(x));
  }
}
