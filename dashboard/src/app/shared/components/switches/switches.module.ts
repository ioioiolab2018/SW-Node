import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwitchesComponent } from "./switches.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [SwitchesComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [SwitchesComponent]
})
export class SwitchesModule {}
