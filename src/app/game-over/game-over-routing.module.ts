import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';


const routes: Routes = [
    {
        path: '',
        component: GameOverComponent
    }
];

export const gameOverRouter: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
