import { Component, OnInit } from '@angular/core';
import { LightSettings } from 'src/app/shared/models/light-settings';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    list: LightSettings[];

    constructor() {
        this.list = [];
        this.list.push(new LightSettings(1, 10, 10, 'LED_1'));
        this.list.push(new LightSettings(2, 15, 12, 'LED_2'));
        this.list.push(new LightSettings(3, 10, 13, 'LED_3'));
    }

    ngOnInit() {}
}
