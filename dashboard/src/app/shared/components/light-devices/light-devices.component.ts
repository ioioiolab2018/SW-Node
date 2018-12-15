import { Component, Input, OnInit } from "@angular/core";
import { LightSettings } from "../../models/light-settings";
import { HttpService } from "src/app/forms/services/http.service";
import { FormArray, FormGroup, FormControl } from "@angular/forms";
import { LightDevice } from "src/app/forms/model/light-device";

@Component({
    selector: "app-light-devices",
    templateUrl: "./light-devices.component.html",
    styleUrls: ["./light-devices.component.scss"]
})
export class LightDevicesComponent implements OnInit {
    _lightDevicesList: LightSettings[];
    isEdited: boolean[];
    form: FormArray;

    @Input()
    set lightDevicesList(val: LightSettings[]) {
        console.log(val);
        if (val) {
            this.isEdited = [];
            for (let i = 0; i < val.length; i++) {
                this.isEdited.push(false);
            }
            this._lightDevicesList = val;
        }
    }

    get lightDevicesList() {
        return this._lightDevicesList;
    }

    constructor(private httpService: HttpService) {}

    // =======================  INIT  ======================= //
    ngOnInit() {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormArray([]);
    }

    getLightsSetteings(): void {
        this.httpService.getLightsSettings().subscribe((val: LightDevice[]) => {
            val.forEach((element: LightDevice) => {
                this.form.push(new FormGroup({
                    id: new FormControl(element.id),
                    name: new FormControl(element.name),
                    pin: new FormControl(element.pin),
                    lux: new FormControl(element.lux),
                }))
            })
        })
    }

    // =======================  EDIT  ======================= //
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
