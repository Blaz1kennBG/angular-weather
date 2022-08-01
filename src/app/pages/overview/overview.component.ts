import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { WeatherService } from "src/app/weather.service";
import cities from "cities.json";
import { map, Observable, switchMap, tap } from "rxjs";
import { Weather } from "src/app/_interfaces/weather.interface";
export interface City {
  country: string;
  lat: string;
  lng: string;
  name: string;
}

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  selectedPlace$: Observable<Weather> | null = null;
  cityList: City[] | undefined = cities;
  today = new Date(Date.now());
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.selectedPlace$ = this.route.queryParams.pipe(
      map((params: Params) => {
        return this.cityList.find((option) =>
          option.name.toLocaleLowerCase().includes(params.q.toLocaleLowerCase())
        );
      }),
      switchMap((city) => this.weatherService.getWeatherOfPlace(city)),
      tap((res) => console.log("CITY RES >>> ", res))
    );
  }
}
