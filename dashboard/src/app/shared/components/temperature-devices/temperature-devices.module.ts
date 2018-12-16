import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemperatureDevicesComponent } from "./temperature-devices.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [TemperatureDevicesComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [TemperatureDevicesComponent]
})
export class TemperatureDevicesModule {}
