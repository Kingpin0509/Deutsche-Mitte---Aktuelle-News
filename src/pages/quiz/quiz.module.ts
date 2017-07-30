import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { FlashCardComponent} from './flash-card/flash-card';
import { QuizComponent} from './quiz-component/quiz';

@NgModule({
  declarations: [
    FlashCardComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FlashCardComponent,
    QuizComponent
  ],
  entryComponents:[
    FlashCardComponent,
    QuizComponent
  ]
})
export class QuizModule {}
