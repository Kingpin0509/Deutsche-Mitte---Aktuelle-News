import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../app/shared/shared.module";
import { NewsletterComponent } from "./newsletter-component/newsletter.component";

@NgModule({
  declarations: [NewsletterComponent],
  imports: [CommonModule, SharedModule],
  exports: [NewsletterComponent],
  entryComponents: [NewsletterComponent]
})
export class NewsletterModule {}
