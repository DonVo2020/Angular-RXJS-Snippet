import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-forkJoin-using-dictionary',
  templateUrl: './forkJoin-using-dictionary.component.html',
})
export class ForkJoinUsingDictionaryComponent implements OnInit {

  data: any[] = [];

  ngOnInit() {
    forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      users: ajax.getJSON('https://api.github.com/users')
    }).subscribe(result => this.data.push(result));

    console.log(this.data);
  }
}
