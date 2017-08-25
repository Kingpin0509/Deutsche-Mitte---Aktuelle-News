import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { AboutComponent } from "./about-component/about.component";
import { AussenpolitikComponent } from './aussenpolitik-component/aussenpolitik.component'

@NgModule({
  declarations: [AboutComponent, AussenpolitikComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutComponent, AussenpolitikComponent],
  entryComponents: [AboutComponent,AussenpolitikComponent]
})
export class AboutModule {}
