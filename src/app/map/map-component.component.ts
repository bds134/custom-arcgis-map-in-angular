import { Component } from '@angular/core';
import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';
import "@arcgis/map-components/dist/components/arcgis-map";

@Component({
  selector: 'app-map',
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export class MapComponent {
  constructor() {
    setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");
  }
}
