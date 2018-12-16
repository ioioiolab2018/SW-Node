import { Component, OnInit } from "@angular/core";
import { TemperatureDevice } from "src/app/forms/model/temperature-device";
import {
    FormGroup,
    FormArray,
    FormBuilder,
    FormControl,
    Validators
} from "@angular/forms";
import { HttpService } from "src/app/forms/services/http.service";

@Component({
    selector: "app-temperature-devices",
    templateUrl: "./temperature-devices.component.html",
    styleUrls: ["./temperature-devices.component.scss"]
})
export class TemperatureDevicesComponent implements OnInit {
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
        this.getTemperatureConfigurations();
    }

    getTemperatureConfigurations(): void {
        this.httpService
            .getTemparetureConfigurations()
            .subscribe((val: TemperatureDevice[]) => {
                const controlsArray: FormArray = this.form.get(
                    "devices"
                ) as FormArray;

                this.isDisabled.length = 0;
                const length = controlsArray.length;
                for (let index = 0; index < length; index++) {
                    controlsArray.removeAt(0);
                }

                val.forEach((element: TemperatureDevice) => {
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
                            )
                        })
                    );
                });
            });
    }

    // =======================  EDIT  ======================= //
    cancelEditDeviceConfiguration(): void {
        this.getTemperatureConfigurations();
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
    }

    saveDeviceConfiguration(control: FormGroup): void {
        this.httpService.saveTemperatureConfiguration(
            new TemperatureDevice(
                control.get("id").value,
                control.value.name,
                control.value.pin
            )
        );
        this.cancelEditDeviceConfiguration();
    }
}
