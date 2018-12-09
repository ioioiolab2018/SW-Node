import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

@NgModule({
    imports: [CommonModule, MenuModule],
    declarations: [HeaderComponent, MenuComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
