import { Component, OnInit } from "@angular/core";
import { FoodService } from "src/app/shared/food.service";
import { FoodItem } from "src/app/shared/foodItem";
import { CommentStmt } from "@angular/compiler";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem;
  foodID = 10;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  createFood() {
    this.selected = new FoodItem(this.foodID++);
  }

  foodSaved(f: FoodItem) {
    const existing: FoodItem = this.food.find((i) => i.id == f.id);
    if (existing != null) {
      Object.assign(existing, f);
    } else {
      this.food.push(f);
    }
    this.selected = null;
  }

  deleteFood(f: FoodItem) {
    this.food = this.food.filter((food) => f.id !== food.id);
    if (this.selected != null && f.id === this.selected.id) {
      this.selected = null;
    }
  }

  closeEditForm() {
    this.selected = null;
  }
}
