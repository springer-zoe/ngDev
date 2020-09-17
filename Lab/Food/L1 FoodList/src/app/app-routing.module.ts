import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { FoodContainerComponent } from "./food/food-container/food-container.component";
import { ChartComponent } from "./chart/chart.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "food",
    component: FoodContainerComponent,
  },
  {
    path: "chart",
    component: ChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
