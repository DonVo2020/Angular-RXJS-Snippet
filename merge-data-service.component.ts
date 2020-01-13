import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-merge-data-service',
  templateUrl: './merge-data-service.component.html',
})
export class MergeDataServiceComponent implements OnInit {

  mergeData: any[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getMergeData().subscribe(result => { this.mergeData.push(result) });
    console.log(this.mergeData);
  }
}
