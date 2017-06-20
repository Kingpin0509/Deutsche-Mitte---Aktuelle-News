import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { StammtischeComponent } from './stammtische-component/stammtische.component';

@NgModule({
  declarations: [
    StammtischeComponent
  ],
  imports: [
  	CommonModule,
  	SharedModule
  ],
  exports: [
    StammtischeComponent
  ],
  entryComponents:[
  StammtischeComponent
  ]
})
export class StammtischeModule {}
