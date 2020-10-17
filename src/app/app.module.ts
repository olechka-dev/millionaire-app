import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouter } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PlayModule } from './play/play.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        appRouter,
        CoreModule,
        PlayModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
