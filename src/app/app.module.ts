import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appRouter } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        appRouter,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
