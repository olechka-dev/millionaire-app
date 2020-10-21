import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play/play.component';
import { OverGuard } from './core/services/guards/over.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'play',
        pathMatch: 'full'
    },
    {
        path: 'play',
        component: PlayComponent
    },
    {
        path: 'over',
        loadChildren: () => import('./game-over/game-over.module').then(m => m.GameOverModule),
        outlet: 'game-over',
        canLoad: [OverGuard]
    },
    {
        path: '**',
        redirectTo: 'play',
        pathMatch: 'full'
    }
];


export const appRouter: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
