import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import Map from "@arcgis/core/Map.js";
import * as locator from "@arcgis/core/rest/locator.js";
import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';

@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrl: './custom-map.component.css'
})
export class CustomMapComponent implements OnInit, OnDestroy {
  public view: any = null;

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const map = new Map({
      basemap: "streets-navigation-vector"
    });

    this.view = new MapView({
      container,
      map: map,
      center: [-100, 23.5],
      zoom: 4
    });

  /*
    const searchWidget = new Search({
      view: this.view
    });

    searchWidget.on("select-result", function (event2) {
      const searchname = event2.result.name;
    });

    this.view.ui.add(searchWidget, 'bottom-left');

    const locatorUrl =
      "https://utility.arcgis.com/usrsvcs/servers/0f0fda27f9c4487792fdc992e1eef1e6/rest/services/World/GeocodeServer";

    this.view.popupEnabled = false;
    this.view.on("click", (event:any) => {
      // Get the coordinates of the click on the view
      const lat = Math.round(event.mapPoint.latitude * 1000000) / 1000000;
      const lon = Math.round(event.mapPoint.longitude * 1000000) / 1000000;

      this.view.openPopup({
        // Set the popup's title to the coordinates of the location
        content: lat + ", " + lon + "<br><i><span style='font-size:smaller'>&nbsp&nbspe.g. 'latitude, longitude'<p>NB: lat/lon values do not automatically transfer into form boxes above. You must do so manually.",
        location: event.mapPoint // Set the location of the popup to the clicked location
      });

      const params = {
        location: event.mapPoint
      };

      // Display the popup
      // Execute a reverse geocode using the clicked location
      locator
        .locationToAddress(locatorUrl, params)
        .then((response) => {
          // If an address is successfully found, show it in the popup's content
          this.view.popup.title = response.address;
          const placename = response.address;
        })
        .catch(() => {
          // If the promise fails and no result is found, show a generic message
          this.view.popup.content = "No address was found for this location";
        });

    });
*/
    return this.view.when();
  }

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}

