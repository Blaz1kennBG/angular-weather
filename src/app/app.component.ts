import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  searchBar = new FormControl("");

  title = "angular-starter";
  ngOnInit() {}
  log(x) {
    console.log(x);
  }
}
