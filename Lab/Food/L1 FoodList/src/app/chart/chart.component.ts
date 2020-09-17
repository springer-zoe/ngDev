import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  constructor() {}

  saleData = [
    { name: "Chicken", value: 20 },
    { name: "Rice", value: 40 },
    { name: "Salad", value: 100 },
    { name: "Cornflakes", value: 70 },
    { name: "Cake", value: 80 },
  ];

  ngOnInit(): void {}
}
