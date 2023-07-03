import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  cars: Car[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllCar().subscribe((res: any) => {
      console.log(res);
      this.cars = res;
    });
  }
}
