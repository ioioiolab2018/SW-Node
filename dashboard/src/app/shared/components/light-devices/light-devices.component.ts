import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/forms/services/http.service";
import {
    FormArray,
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from "@angular/forms";
import { LightDevice } from "src/app/forms/model/light-device";

@Component({
    selector: "app-light-devices",
    templateUrl: "./light-devices.component.html",
    styleUrls: ["./light-devices.component.scss"]
})
export class LightDevicesComponent implements OnInit {
    isDisabled: boolean[] = [];
    form: FormGroup = this.formBuilder.group({
        devices: this.formBuilder.array([])
    });

    get devices() {
        return this.form.get("devices") as FormArray;
    }

    constructor(
        private formBuilder: FormBuilder,
        private httpService: HttpService
    ) {}

    // =======================  INIT  ======================= //
    ngOnInit() {
        this.getLightConfigurations();
    }

    getLightConfigurations(): void {
        this.httpService
            .getLightConfigurations()
            .subscribe((val: LightDevice[]) => {
                const controlsArray: FormArray = this.form.get(
                    "devices"
                ) as FormArray;

                this.isDisabled.length = 0;
                const length = controlsArray.length;
                for (let index = 0; index < length; index++) {
                    controlsArray.removeAt(0);
                }

                val.forEach((element: LightDevice) => {
                    this.isDisabled.push(true);
                    controlsArray.push(
                        new FormGroup({
                            id: new FormControl({
                                value: element.id,
                                disabled: true
                            }),
                            name: new FormControl(
                                {
                                    value: element.name,
                                    disabled: true
                                },
                                Validators.required
                            ),
                            pin: new FormControl(
                                {
                                    value: element.pin,
                                    disabled: true
                                },
                                Validators.pattern("[0-9]*")
                            ),
                            lux: new FormControl(
                                {
                                    value: element.lux,
                                    disabled: true
                                },
                                Validators.pattern("[0-9]*")
                            )
                        })
                    );
                });
            });
    }

    // =======================  EDIT  ======================= //
    cancelEditDeviceConfiguration(): void {
        this.getLightConfigurations();
    }

    editDeviceConfiguration(val: number): void {
        const formArray: FormArray = this.form.get("devices") as FormArray;
        this.isDisabled[val] = false;
        formArray
            .at(val)
            .get("name")
            .enable();
        formArray
            .at(val)
            .get("pin")
            .enable();
        formArray
            .at(val)
            .get("lux")
            .enable();
    }

    saveDeviceConfiguration(control: FormGroup): void {
        this.httpService.saveLightConfiguration(
            new LightDevice(
                control.get("id").value,
                control.value.name,
                control.value.pin,
                control.value.lux
            )
        );
        this.cancelEditDeviceConfiguration();
    }
}
