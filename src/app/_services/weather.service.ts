import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GeolocationService } from "@ng-web-apis/geolocation";
import { Observer } from "rxjs";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { City } from "../pages/overview/overview.component";
import { AirPollution } from "../_interfaces/air-pollution.interface";
import { Weather } from "../_interfaces/weather.interface";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  protected apiUrl = environment.weatherApiUrl;
  protected apiKey = environment.weatherApiKey;
  weather$ = new BehaviorSubject<Weather>(null);
  airPollution$ = new BehaviorSubject<AirPollution>(null);
  constructor(
    private http: HttpClient,
    private readonly geolocation$: GeolocationService
  ) {}
  getWeatherOfPlace(city: City): Observable<Weather> {
    return this.http
      .get<Weather>(this.apiUrl + `/data/2.5/forecast`, {
        params: {
          lat: city.lat,
          lon: city.lng,
          appid: this.apiKey,
          units: "metric",
        },
      })
      .pipe(tap((res) => this.weather$.next(res)));
  }
  getAirPollution(city: City) {
    return this.http
      .get<AirPollution>(this.apiUrl + `/data/2.5/air_pollution`, {
        params: {
          lat: city.lat,
          lon: city.lng,
          appid: this.apiKey,
        },
      })
      .pipe(tap((r) => this.airPollution$.next(r)));
  }
}
