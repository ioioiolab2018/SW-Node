import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LightDevicesModule} from "./shared/components/light-devices/light-devices.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LightDevicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
