import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightDevicesComponent } from './light-devices.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [LightDevicesComponent],
    exports: [LightDevicesComponent]
})
export class LightDevicesModule {}
