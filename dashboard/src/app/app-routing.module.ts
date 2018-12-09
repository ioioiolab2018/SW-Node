import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsModule } from './forms/settings/settings.module';
import { AboutModule } from './forms/about/about.module';
import { HistoryModule } from './forms/history/history.module';

const routes: Routes = [];

@NgModule({
    imports: [
        AboutModule,
        HistoryModule,
        SettingsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
