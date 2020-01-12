import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = from([ 1, 1, 2, 2, 3, 3]);
    source.pipe(distinctUntilChanged()).subscribe(x=>console.log(x));
  }
}
