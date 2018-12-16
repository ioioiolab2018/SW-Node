import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history.component";
import { HistoryRoutingModule } from "./history-routing.module";
import { LightsHistoryModule } from "src/app/shared/components/lights-history/lights-history.module";
import { TemperatureHistoryModule } from "src/app/shared/components/temperature-history/temperature-history.module";

@NgModule({
    declarations: [HistoryComponent],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        LightsHistoryModule,
        TemperatureHistoryModule
    ]
})
export class HistoryModule {}
