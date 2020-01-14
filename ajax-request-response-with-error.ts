import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const githubUsers = 'https://api.github.com/error';
    ajax.getJSON(githubUsers).subscribe(result => console.log(result), err => console.error(JSON.stringify(err)));
  }
}
