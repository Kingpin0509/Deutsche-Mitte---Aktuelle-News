import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { SettingsComponent } from "./settings-component/settings.component";
import { AppVersion } from "@ionic-native/app-version";

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule],
  exports: [SettingsComponent],
  entryComponents: [SettingsComponent],
  providers: [AppVersion]
})
export class SettingsModule {}
