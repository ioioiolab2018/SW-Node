import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightDevicesComponent} from './light-devices.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LightDevicesComponent],
    exports: [LightDevicesComponent]
})
export class LightDevicesModule {
}
