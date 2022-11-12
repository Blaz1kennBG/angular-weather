import { Component, OnInit, Input } from "@angular/core";
import { map, Observable } from "rxjs";
import { WeatherService } from "src/app/_services/weather.service";
import { Weather } from "src/app/_interfaces/weather.interface";
import { City } from "../overview/overview.component";
import { tap } from "rxjs";

@Component({
  selector: "app-now",
  templateUrl: "./now.component.html",
  styleUrls: ["./now.component.css"],
})
export class NowComponent implements OnInit {
  iconurl = "http://openweathermap.org/img/w/";
  weather$ = this.weatherService.weather$.pipe(map((w) => w.list[0]));
  airPollution$ = this.weatherService.airPollution$.pipe(
    map((a) => a.list[0]),
    tap(({ components }) => {
      this.airType =
        components.no2 <= 50
          ? "Good"
          : components.no2 > 50 && components.no2 <= 100
          ? "Fair"
          : components.no2 > 100 && components.no2 <= 200
          ? "Moderate"
          : components.no2 > 200 && components.no2 <= 400
          ? "Poor"
          : "Very Poor";
    })
  );
  airType;
  today = new Date();
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
