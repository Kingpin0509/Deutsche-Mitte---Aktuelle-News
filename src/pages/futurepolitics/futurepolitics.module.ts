import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { FuturePoliticsComponent } from "./futurepolitics-component/futurepolitics.component";

@NgModule({
  declarations: [FuturePoliticsComponent],
  imports: [CommonModule, SharedModule],
  exports: [FuturePoliticsComponent],
  entryComponents: [FuturePoliticsComponent]
})
export class FuturePoliticsModule {}
