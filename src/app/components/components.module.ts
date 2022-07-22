import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

@NgModule({
  declarations: [WeatherCardComponent, WeatherListComponent],
  imports: [CommonModule],
  exports: [WeatherCardComponent, WeatherListComponent],
})
export class ComponentsModule {}
