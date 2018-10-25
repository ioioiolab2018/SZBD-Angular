import { Component, OnInit, Input } from '@angular/core';
import { MenuOption } from '../../model/menu-option';

@Component({
    selector: 'szbd-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    @Input()
    items: MenuOption[] = [];

    constructor() { }

    ngOnInit() {
    }

}
