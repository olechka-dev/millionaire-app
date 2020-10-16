import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
    {
        path: '',
        component: PlayComponent
    }
];



export const playRouter: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
