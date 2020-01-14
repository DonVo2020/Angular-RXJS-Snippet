import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const githubUsers = 'https://api.github.com/users?per_page=2';
    ajax(githubUsers).subscribe(result => console.log(JSON.stringify(result)), err => console.error(err));
  }
}
