import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";
import { WeatherService } from "./weather.service";
import cities from "cities.json";
import { City } from "./pages/overview/overview.component";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  form = this.fb.group({
    searchBar: ["", [Validators.required]],
  });
  initialCity: City = cities.find(
    (x: City) => x.name.toLowerCase() === "burgas"
  );
  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  title = "angular-starter";
  ngOnInit() {
    this.route.queryParams.subscribe({
      next: ({ city }) => {
        if (!city) {
          this.router.navigate(["/place"], {
            queryParams: {
              city: "burgas",
            },
          });
        }
      },
    });
  }
  onSubmit() {
    this.router.navigate(["/place"], {
      queryParams: {
        city: this.form.getRawValue().searchBar.trim(),
      },
    });
  }
  log(x) {
    console.log(x);
  }
}
