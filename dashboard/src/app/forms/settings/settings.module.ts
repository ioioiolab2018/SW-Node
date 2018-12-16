import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SettingsComponent } from "./settings.component";
import { LightDevicesModule } from "src/app/shared/components/light-devices/light-devices.module";
import { SettingsRoutingModule } from "./settings-routing.module";
import { TemperatureDevicesModule } from "src/app/shared/components/temperature-devices/temperature-devices.module";
import { SwitchesModule } from "src/app/shared/components/switches/switches.module";

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        LightDevicesModule,
        SwitchesModule,
        TemperatureDevicesModule
    ]
})
export class SettingsModule {}
