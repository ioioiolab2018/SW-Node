import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { LightDevicesModule } from 'src/app/shared/components/light-devices/light-devices.module';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
    declarations: [SettingsComponent],
    imports: [CommonModule, SettingsRoutingModule, LightDevicesModule]
})
export class SettingsModule {}
