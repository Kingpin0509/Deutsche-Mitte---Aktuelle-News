import { Component } from '@angular/core';

@Component({
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {
  // Google Map zoom level
  zoom: number = 8;
  
  // Google Map center
  latitude: number = 52.5167493;
  longitude: number = 13.3797915; 
  
  markers = [
	  {
		  latitude: 52.5167493,
		  longitude: 13.3797915,
		  label: "Partei Deutsche Mitte",
		  description: "Pariser Platz 4A, 10117 Berlin, Deutschland"
	  },
	  // {
		//   latitude: 51.373858,
		//   longitude: 7.215982,
		//   label: "B",
		//   description: "Description B"
	  // },
	  // {
		//   latitude: 51.723858,
		//   longitude: 7.895982,
		//   label: "C",
		//   description: "Description C"
	  // }
  ]

}
