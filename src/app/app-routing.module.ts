import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'play',
        pathMatch: 'full'
    },
    {
        path: 'play',
        loadChildren: () => import('./play/play.module').then(m => m.PlayModule)
    },

    // {
    //     path: 'dash',
    //     component: DashboardComponent
    // },
    {
        path: '**',
        redirectTo: 'play',
        pathMatch: 'full'
    }
];


export const appRouter: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
