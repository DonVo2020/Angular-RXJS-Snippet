import { Component, OnInit } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    concat(
      of(1,2,3),
      of(-7, -8, -9),
      of(4,5,6)
    ).subscribe(x=>console.log(x));  
  }
}
