import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

   from('Hello World').subscribe(x=>console.log(x));

   // Output:  'H','e','l','l','o',' ', 'W','o','r','l','d'
  }
}
