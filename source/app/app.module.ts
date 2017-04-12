import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeView } from '../views/home.view';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeView,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export default class AppModule {
    constructor(public appRef: ApplicationRef) {}
}
