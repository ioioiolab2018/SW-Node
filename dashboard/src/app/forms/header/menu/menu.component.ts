import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuOptions: string[];

    constructor(private menuService: MenuService) {
        this.menuOptions = this.menuService.getMenuOptions();
    }

    ngOnInit() {
    }

}
