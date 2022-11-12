export interface Weather {
  cnt: number;
  cod: string;
  message: number;
  city: {
    coord: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  list: WeatherListItem[];
}
export interface WeatherListItem {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: {
    pod: string;
  };
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  length: number;

  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
