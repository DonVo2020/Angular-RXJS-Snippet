import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const map = new Map();
    map.set(1, 'First');
    map.set(2, 'Last');

    from(map).subscribe(x=>console.log(x));
  }
}
