import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private readonly geolocation$: GeolocationService
  ) {}
}
