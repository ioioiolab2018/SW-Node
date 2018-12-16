import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/forms/services/http.service";
import { LightValue } from "src/app/forms/model/light-value";

@Component({
    selector: "app-lights-history",
    templateUrl: "./lights-history.component.html",
    styleUrls: ["./lights-history.component.scss"]
})
export class LightsHistoryComponent implements OnInit {
    history: LightValue[];

    constructor(private httpService: HttpService) {
        this.getLightHistory();
    }

    ngOnInit() {}

    private getLightHistory(): void {
        this.httpService.getLightValues().subscribe((val: LightValue[]) => {
            this.history = val.reverse();
        });
    }
}
