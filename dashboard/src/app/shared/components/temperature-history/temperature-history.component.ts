import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/forms/services/http.service";
import { TemperatureValue } from "src/app/forms/model/temperature-value";

@Component({
    selector: "app-temperature-history",
    templateUrl: "./temperature-history.component.html",
    styleUrls: ["./temperature-history.component.scss"]
})
export class TemperatureHistoryComponent implements OnInit {
    history: TemperatureValue[];

    constructor(private httpService: HttpService) {
        this.getLightHistory();
    }

    ngOnInit() {}

    private getLightHistory(): void {
        this.httpService
            .getTemperatureValues()
            .subscribe((val: TemperatureValue[]) => {
                this.history = val.reverse();
            });
    }
}
