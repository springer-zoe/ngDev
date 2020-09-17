import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { FoodItem } from "./foodItem";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  private url = `${environment.api}skills`;

  getFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>("/assets/food.json");
  }

  getFoodItem(id): Observable<FoodItem> {
    return this.getFood().pipe(map((food) => food.find((f) => f.id == id)));
  }

  addFoodItem(foodItem: FoodItem): Observable<FoodItem> {
    return this.httpClient.post<FoodItem>(this.url, foodItem);
  }

  deleteFoodItem(foodItem: FoodItem): Observable<any> {
    return this.httpClient.delete(this.url);
  }
}
