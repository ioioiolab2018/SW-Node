import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightDevicesComponent } from './light-devices.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [LightDevicesComponent],
    exports: [LightDevicesComponent]
})
export class LightDevicesModule {}
