import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ms-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input()
    items: string[] = [];

    constructor() { }

    ngOnInit() {
    }

}
