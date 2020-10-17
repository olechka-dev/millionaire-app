import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOverComponent } from './game-over/game-over.component';
import { gameOverRouter } from './game-over-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [GameOverComponent],
    imports: [
        CommonModule,
        gameOverRouter,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class GameOverModule {
}
