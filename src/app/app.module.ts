import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomMapComponent } from './custom-map/custom-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomePageComponent,
    CustomMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
