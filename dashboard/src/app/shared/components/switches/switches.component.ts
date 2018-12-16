import { Component, OnInit } from "@angular/core";
import { Switch } from "src/app/forms/model/switch";
import {
    FormGroup,
    FormArray,
    FormBuilder,
    FormControl,
    Validators
} from "@angular/forms";
import { HttpService } from "src/app/forms/services/http.service";

@Component({
    selector: "app-switches",
    templateUrl: "./switches.component.html",
    styleUrls: ["./switches.component.scss"]
})
export class SwitchesComponent implements OnInit {
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
        this.getSwitchesConfigurations();
    }

    getSwitchesConfigurations(): void {
        this.httpService
            .getSwitchesConfigurations()
            .subscribe((val: Switch[]) => {
                const controlsArray: FormArray = this.form.get(
                    "devices"
                ) as FormArray;

                this.isDisabled.length = 0;
                const length = controlsArray.length;
                for (let index = 0; index < length; index++) {
                    controlsArray.removeAt(0);
                }

                val.forEach((element: Switch) => {
                    this.isDisabled.push(true);
                    controlsArray.push(
                        new FormGroup({
                            pin: new FormControl(
                                {
                                    value: element.pin,
                                    disabled: true
                                },
                                Validators.pattern("[0-9]*")
                            ),
                            name: new FormControl(
                                {
                                    value: element.name,
                                    disabled: true
                                },
                                Validators.required
                            ),
                            value: new FormControl({
                                value: element.value ? true : false,
                                disabled: true
                            })
                        })
                    );
                });
            });
    }

    // =======================  EDIT  ======================= //
    cancelEditDeviceConfiguration(): void {
        this.getSwitchesConfigurations();
    }

    editDeviceConfiguration(val: number): void {
        const formArray: FormArray = this.form.get("devices") as FormArray;
        this.isDisabled[val] = false;
        formArray
            .at(val)
            .get("pin")
            .enable();
        formArray
            .at(val)
            .get("name")
            .enable();
        formArray
            .at(val)
            .get("value")
            .enable();
    }

    saveDeviceConfiguration(control: FormGroup): void {
        this.httpService.saveSwitchesConfiguration(
            new Switch(
                control.get("pin").value,
                control.value.name,
                control.value.value ? 1 : 0
            )
        );
        this.cancelEditDeviceConfiguration();
    }
}
