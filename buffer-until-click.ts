import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  ngOnInit() {

    const myInterval = interval(1000);
    const bufferBy = fromEvent(document, 'click'); // click on browser to see output.
    const myBufferInterval = myInterval.pipe(buffer(bufferBy));
    
    myBufferInterval.subscribe(x => console.log(' Buffered Value: ', x));
  }
}
