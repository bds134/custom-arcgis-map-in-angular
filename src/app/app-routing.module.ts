import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./map/map-component.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { CustomMapComponent } from "./custom-map/custom-map.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: HomePageComponent },
  { path: 'custom', component: CustomMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
