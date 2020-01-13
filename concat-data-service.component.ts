import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-concat-data-service',
  templateUrl: './concat-data-service.component.html',
})
export class ConcatDataServiceComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  concatData: any[] = [];

  ngOnInit() {

    this.dataService.getConcatData().subscribe((result: any) => { this.concatData.push(result) });
    console.log(this.concatData);
  }
}
