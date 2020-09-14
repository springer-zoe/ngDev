import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FoodItem } from './food-item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  food = [
    { name: 'Pommes', price: 2 },
    { name: 'Falafel', price: 2 },
  ];

  getFood(): Observable<FoodItem[]> {
    //return of (this.food);
    return this.httpClient.get<FoodItem[]>(environment.url);
  }
}
