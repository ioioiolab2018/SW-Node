import {Component, Input, OnInit} from '@angular/core';
import {LightSettings} from "../../models/light-settings";

@Component({
    selector: 'app-light-devices',
    templateUrl: './light-devices.component.html',
    styleUrls: ['./light-devices.component.scss']
})
export class LightDevicesComponent implements OnInit {
    _lightDevicesList: LightSettings[];
    isEdited: boolean[];

    @Input()
    set lightDevicesList(val: LightSettings[]) {
        console.log(val);
        if (val) {
            this.isEdited = [];
            for (let i = 0; i < val.length; i++) {
                this.isEdited.push(false);
            }
            this._lightDevicesList = val
        }
    }

    get lightDevicesList() {
        return this._lightDevicesList;
    }

    constructor() {
    }

    ngOnInit() {
    }

    cancelDeviceSettings(val: number): void {
        this.isEdited[val] = false;
    }

    editDeviceSettings(val: number): void {
        this.isEdited[val] = true;
    }

    saveDeviceSettings(nr: number, val: LightSettings): void {
        console.log(val);
        this.cancelDeviceSettings(nr);
    }
}
