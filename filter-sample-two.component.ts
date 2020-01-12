import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-filter-sample-two',
  templateUrl: './filter-sample-two.component.html',
})
export class FilterSampleTwoComponent implements OnInit {
  numbersData: number[] = [];
  citiesData: string[] = [];
  citiesReactiveData: string[] = [];
  myFormControl: FormControl;

  constructor() {
    this.myFormControl = new FormControl('');
  }

  ngOnInit() {  
    const sourceNumbers = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const sourceCities = from(['Houston', 'Charleston', 'Portland', 'San Diego', 'Boston', 'Seattle',
                              'New Orlean', 'Atlanta', 'Nashville', 'Charlotte', 'Miami', 'Newark',
                              'Baltimore', 'Richmond', 'Chicago', 'San Antonio', 'Detroit', 'Santa Fe',
                              'Austin', 'San Jose', 'Redmond', 'New York City', 'Orlando', 'Los Angeles']);

    sourceNumbers.pipe(filter(num => num % 2 === 0)).subscribe(result => this.numbersData.push(result));
    sourceCities.pipe(filter(city => city.startsWith('S'))).subscribe(result => this.citiesData.push(result));

    this.myFormControl.valueChanges.subscribe(val => {
      this.citiesReactiveData = [];
      sourceCities.pipe(filter((city: string) => city.toUpperCase().startsWith(val.toUpperCase())))
        .subscribe(result => this.citiesReactiveData.push(result));
    })   
  }
}
