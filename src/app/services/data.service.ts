import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const data = 'http://localhost:3000/cars';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllCar() {
    return this.http.get(data);
  }
}
