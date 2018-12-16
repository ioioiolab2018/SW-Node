import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LightsHistoryComponent } from "./lights-history.component";

@NgModule({
    declarations: [LightsHistoryComponent],
    imports: [CommonModule],
    exports: [LightsHistoryComponent]
})
export class LightsHistoryModule {}
