import { Component, Input, OnInit } from "@angular/core";
import { Weather } from "src/app/_interfaces/weather.interface";
import SwiperCore, { SwiperOptions } from "swiper";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.css"],
})
export class WeatherCardComponent implements OnInit {
  @Input() city: Weather | null = null;
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: true,
    allowTouchMove: true,
    scrollbar: { draggable: true },
  };
  constructor() {}

  ngOnInit(): void {}
}
