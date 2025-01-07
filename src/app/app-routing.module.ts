import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./map/map-component.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
