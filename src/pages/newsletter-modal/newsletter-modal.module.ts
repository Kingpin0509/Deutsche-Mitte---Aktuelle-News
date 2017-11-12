import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { abenteuerComponent } from './10112017/10112017.component';

@NgModule({
  declarations: [abenteuerComponent],
  imports: [CommonModule, SharedModule],
  exports: [abenteuerComponent],
  entryComponents: [abenteuerComponent]
})
export class AboutModule {}
