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
            { name: 'Informacje', value: 'info' },
            { name: 'Oceny', value: 'grades' },
            { name: 'Przedmioty', value: 'subjects' },
            { name: 'Wnioski', value: 'proposals' },
            { name: 'Ankiety', value: 'questionnaires' },
            { name: 'Wyloguj', value: 'logout' }
        ];
    }
}
