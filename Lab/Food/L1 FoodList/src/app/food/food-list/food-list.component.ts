import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "src/app/shared/foodItem";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"],
})
export class FoodListComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ["id", "name", "price", "calories"];

  @Input()
  food: FoodItem[];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter();
  @Output()
  foodDeleted: EventEmitter<FoodItem> = new EventEmitter();
  dataSource = ELEMENT_DATA;

  ngOnInit() {}

  selectFood(p: FoodItem) {
    this.foodSelected.emit(p);
  }

  deleteFood(p: FoodItem) {
    this.foodDeleted.emit(p);
  }
}

const ELEMENT_DATA: FoodItem[] = [
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
  { id: 1, name: "Cheese", price: 9, calories: 1200 },
];

/**
 * @title Basic use of `<table mat-table>`

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
}) 
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}*/
