import { Component, OnInit, Input } from "@angular/core";
import { map, Observable } from "rxjs";
import { WeatherService } from "src/app/weather.service";
import { Weather } from "src/app/_interfaces/weather.interface";
import { City } from "../overview/overview.component";

@Component({
  selector: "app-now",
  templateUrl: "./now.component.html",
  styleUrls: ["./now.component.css"],
})
export class NowComponent implements OnInit {
  weather$ = this.weatherService.weather$.pipe(map((w) => w.list[0]));
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
