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
            new MenuOption('Informacje', 'info'),
            new MenuOption('Oceny', 'grades'),
            new MenuOption('Przedmioty', 'subjects'),
            new MenuOption('Wnioski', 'proposals'),
            new MenuOption('Ankiety', 'questionnaires')
        ];
    }
}
