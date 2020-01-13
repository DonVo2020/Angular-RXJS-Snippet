import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map,mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  mapData: number[] = [];
  mapToData: string[] = [];

  ngOnInit() {

    const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    source.pipe(map((val: number) => val = val * 10)).subscribe(result => this.mapData.push(result));

    // .mapTo() - map the emission to a constant value
    source.pipe(mapTo('Hello World')).subscribe(result => this.mapToData.push(result));

    console.log(JSON.stringify(this.mapData));
    console.log(JSON.stringify(this.mapToData));
  }
}
