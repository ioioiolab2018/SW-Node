import { Component } from '@angular/core';
import {LightSettings} from "./shared/models/light-settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  list: LightSettings[];

  constructor() {
      this.list = [];
       this.list.push(new LightSettings(1, 10, 10, 'LED_1'));
       this.list.push(new LightSettings(2, 15, 12, 'LED_2'));
       this.list.push(new LightSettings(3, 10, 13, 'LED_3'));
   }
}
