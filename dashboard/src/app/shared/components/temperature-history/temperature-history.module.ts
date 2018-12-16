import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemperatureHistoryComponent } from "./temperature-history.component";

@NgModule({
    declarations: [TemperatureHistoryComponent],
    imports: [CommonModule],
    exports: [TemperatureHistoryComponent]
})
export class TemperatureHistoryModule {}
