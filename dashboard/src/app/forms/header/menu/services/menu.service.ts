import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menuOptions: string[];

    constructor() {
        this.initMenuOptions();
    }

    getMenuOptions(): string[] {
        return this.menuOptions;
    }

    private initMenuOptions(): void {
        this.menuOptions = ['settings', 'history', 'about'];
    }
}
