import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { WeatherService } from "src/app/_services/weather.service";

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.css"],
})
export class TodayComponent implements OnInit {
  iconurl = "http://openweathermap.org/img/w/";
  weather$ = this.weatherService.weather$.pipe(
    map((w) => {
      const today = new Date();
      return {
        ...w,
        list: w.list.filter(
          (el) => new Date(el.dt_txt).getDate() === today.getDate()
        ),
      };
    })
  );

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
