import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
    selector: 'szbd-employee-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuOptions: MenuOption[];

    constructor(
        private authenticationService: AuthenticationService,
        private menuService: MenuService
    ) {
        this.menuOptions = this.menuService.getMenuOptions();
    }

    ngOnInit() {}

    logout(): void {
        this.authenticationService.logout();
        location.reload(true);
    }
}
