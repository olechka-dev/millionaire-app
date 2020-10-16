import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playRouter } from './play-routing.module';
import { PlayComponent } from './play/play.component';
import { StatusComponent } from './status/status.component';
import { QuestionComponent } from './question/question.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
    declarations: [PlayComponent, StatusComponent, QuestionComponent, ProgressBarComponent],
    imports: [
        CommonModule,
        playRouter
    ]
})
export class PlayModule {
}
