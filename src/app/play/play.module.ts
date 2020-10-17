import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { StatusComponent } from './status/status.component';
import { QuestionComponent } from './question/question.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
    declarations: [PlayComponent, StatusComponent, QuestionComponent, ProgressBarComponent, TimerComponent],
    imports: [
        CommonModule
    ]
})
export class PlayModule {
}
