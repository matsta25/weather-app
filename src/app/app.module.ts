import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartComponent} from './component/start/start.component';
import {SelectCityComponent} from './component/select-city/select-city.component';
import {ShowWeatherComponent} from './component/show-weather/show-weather.component';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SelectCityComponent,
    ShowWeatherComponent,
    ToolbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
