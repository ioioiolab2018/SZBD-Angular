import { Injectable } from '@angular/core';
import { MenuOption } from 'src/app/shared/model/menu-option';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menuOptions: MenuOption[];

    constructor() {
        this.initMenuOptions();
    }

    getMenuOptions(): MenuOption[] {
        return this.menuOptions;
    }

    private initMenuOptions(): void {
        this.menuOptions = [
            new MenuOption('Szukaj', 'find'),
            new MenuOption('Dodaj', 'create'),
            new MenuOption('Oceń', 'rate'),
            new MenuOption('Ankiety', 'questionnaires'),
            new MenuOption('Wnioski', 'proposals')
        ];
    }
}
