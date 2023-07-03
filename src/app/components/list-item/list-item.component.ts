import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

const data = 'http://localhost:3000/cars';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  cars: Car[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(data).subscribe((res: any) => {
      console.log(res);
      this.cars = res;
    });
  }
}
