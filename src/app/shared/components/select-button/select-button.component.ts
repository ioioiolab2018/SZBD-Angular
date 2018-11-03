import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuOption } from '../../model/menu-option';

@Component({
    selector: 'szbd-select-button',
    templateUrl: './select-button.component.html',
    styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
    @Input()
    options: MenuOption[];
    @Output()
    select = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    selectValue(val: string): void {
        this.select.emit(val);
    }

    isMiddle(val: number): boolean {
        return val === Math.floor(this.options.length / 2);
    }
}
