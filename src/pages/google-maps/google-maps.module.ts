import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { GoogleMapsComponent } from './google-maps-component/google-maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    GoogleMapsComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNK6-zpF-j4tVRJqQtxrqaxuVc2rr5ptE'
    })
  ],
  exports: [
    GoogleMapsComponent
  ],
  entryComponents:[
  	GoogleMapsComponent
  ]
})
export class GoogleMapsModule {}
