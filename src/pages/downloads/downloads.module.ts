import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { DownloadsComponent } from './downloads-component/downloads.component';

@NgModule({
  declarations: [
    DownloadsComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    DownloadsComponent
  ],
  entryComponents:[
  	DownloadsComponent
  ]
})
export class DownloadsModule {}
