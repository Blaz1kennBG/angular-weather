import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherCardComponent } from "./weather-card/weather-card.component";
import { WeatherListComponent } from "./weather-list/weather-list.component";
import Swiper, { SwiperModule } from "swiper/angular";
import { TimeDifferencePipe } from "../_pipes/time-difference.pipe";

@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherListComponent,
    TimeDifferencePipe,
  ],
  imports: [CommonModule, SwiperModule],
  exports: [WeatherCardComponent, WeatherListComponent, TimeDifferencePipe],
})
export class ComponentsModule {}
