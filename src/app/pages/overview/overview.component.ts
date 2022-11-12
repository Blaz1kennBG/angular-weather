import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import cities from "cities.json";
import { combineLatest } from "rxjs";
import { map, Observable, switchMap, tap, filter } from "rxjs";
import { AirPollution } from "src/app/_interfaces/air-pollution.interface";
import { Weather } from "src/app/_interfaces/weather.interface";
import { WeatherService } from "src/app/_services/weather.service";
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
  weatherAndAirPollution$: Observable<any>;
  cityList: City[];
  selectedCity: City;
  today = new Date(Date.now());
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.cityList = cities as City[];
    this.weatherAndAirPollution$ = this.route.queryParams.pipe(
      map(({ city }) => {
        return this.cityList.find((option) =>
          option.name.toLocaleLowerCase().includes(city.toLocaleLowerCase())
        );
      }),
      tap((city) => (this.selectedCity = city)),
      filter((city) => !!city),
      switchMap((city) =>
        combineLatest([
          this.weatherService.getWeatherOfPlace(city),
          this.weatherService.getAirPollution(city),
        ])
      )
    );
  }
}
