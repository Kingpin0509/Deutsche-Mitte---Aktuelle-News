import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { AboutComponent } from "./about-component/about.component";
import { AussenpolitikComponent } from './aussenpolitik-component/aussenpolitik.component'
import { InnenpolitikComponent } from './innenpolitik-component/innenpolitik.component'
import { FinanzenComponent } from './finanzen-component/finanzen.component'
import { WirtschaftComponent } from './wirtschaft-component/wirtschaft.component'
import { ArbeitComponent } from './arbeit-component/arbeit.component'
import { VerteidigungComponent } from './verteidigung-component/verteidigung.component'
import { BildungComponent } from './bildung-component/bildung.component'
import { FamilieComponent } from './familie-component/familie.component'
import { UmweltComponent } from './umwelt-component/umwelt.component'
import { NahrungComponent } from './nahrung-component/nahrung.component'
import { GesundheitComponent } from './gesundheit-component/gesundheit.component'
import { VerkehrComponent } from './verkehr-component/verkehr.component'
import { EntwicklungComponent } from "./entwicklung-component/entwicklung.component";
import { JustizComponent } from "./justiz-component/justiz.component";

@NgModule({
  declarations: [AboutComponent, AussenpolitikComponent,InnenpolitikComponent,FinanzenComponent,WirtschaftComponent,ArbeitComponent,VerteidigungComponent,BildungComponent,FamilieComponent,UmweltComponent,NahrungComponent,GesundheitComponent,VerkehrComponent,EntwicklungComponent,JustizComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutComponent, AussenpolitikComponent,InnenpolitikComponent,FinanzenComponent,WirtschaftComponent,ArbeitComponent,VerteidigungComponent,BildungComponent,FamilieComponent,UmweltComponent,NahrungComponent,GesundheitComponent,VerkehrComponent,EntwicklungComponent,JustizComponent],
  entryComponents: [AboutComponent,AussenpolitikComponent,InnenpolitikComponent,FinanzenComponent,WirtschaftComponent,ArbeitComponent,VerteidigungComponent,BildungComponent,FamilieComponent,UmweltComponent,NahrungComponent,GesundheitComponent,VerkehrComponent,EntwicklungComponent,JustizComponent]
})
export class AboutModule {}
