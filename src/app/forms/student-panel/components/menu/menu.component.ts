import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuOption } from 'src/app/shared/model/menu-option';

@Component({
    selector: 'szbd-student-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuOptions: MenuOption[];

    constructor(private menuService: MenuService) {
        this.menuOptions = this.menuService.getMenuOptions();
    }

    ngOnInit() {
    }

}
