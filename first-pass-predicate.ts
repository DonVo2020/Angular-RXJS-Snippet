import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const source = from([7,5,3,4,5,6,2,1]);
    source.pipe(first(y=>y === 5)).subscribe(x=>console.log('First is ' + x));
  }
}
