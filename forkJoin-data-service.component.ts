import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-forkJoin-data-service',
  templateUrl: './forkJoin-data-service.component.html',
})
export class ForkJoinDataServiceComponent implements OnInit {

  forkJoinData;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.getForkJoinData().subscribe((data: any) => { this.forkJoinData = data; });
  }
}
