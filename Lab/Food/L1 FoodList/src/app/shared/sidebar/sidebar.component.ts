import { Component, OnInit } from "@angular/core";
import { NavItem } from "../navItem";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: "Subpage1", url: "/" },
      { title: "Subpage2", url: "/" },
    ];
  }
}
