import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WeatherService} from '../../service/weather.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {

  cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
  });

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.weatherService.getWeatherByCityName(this.cityForm.value.cityName).pipe(
      map((data) => {
        console.log(data);
      }),
      catchError(
        this.handleError.bind(this)
      )
    ).subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error.error.cod, error.error.message);
    }

    return throwError(
      'Something bad happened; please try again later.');
  }
}
