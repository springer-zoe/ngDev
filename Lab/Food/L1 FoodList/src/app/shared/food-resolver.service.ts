import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FoodService } from "./food.service";
import { FoodItem } from "./foodItem";

@Injectable({
  providedIn: "root",
})
export class FoodResolverService {
  constructor(private service: FoodService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): FoodItem | Observable<FoodItem> | Promise<FoodItem> {
    const id = +route.params["id"];
    return this.service.getFoodItem(id);
  }
}
