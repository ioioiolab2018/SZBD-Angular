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
            new MenuOption('Wyszukiwarka', 'find'),
            new MenuOption('Nowy', 'create'),
            new MenuOption('Oceny', 'rate'),
            new MenuOption('Ankiety', 'questionnaires'),
            new MenuOption('Wnioski', 'proposals')
        ];
    }
}
