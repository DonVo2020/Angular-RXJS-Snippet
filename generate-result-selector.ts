import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    generate(2, x => x <= 38, x => x + 3, x => '.'.repeat(x)).subscribe(console.log);
  }
}
