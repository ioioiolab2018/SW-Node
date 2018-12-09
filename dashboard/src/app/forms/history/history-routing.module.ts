import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const historyRouting: Routes = [
    {
        path: 'history',
        component: HistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(historyRouting)],
    exports: [RouterModule]
})
export class HistoryRoutingModule {}
