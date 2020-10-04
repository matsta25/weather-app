import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_WEATHER_ENDPOINT = '/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public actualWeatherData = null;

  constructor(
    private http: HttpClient
  ) {
  }

  public getWeatherByCityName(cityName: string): any {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', environment.API_KEY);

    return this.http.get(`${environment.API_URL}${API_WEATHER_ENDPOINT}`, {params});
  }
}
