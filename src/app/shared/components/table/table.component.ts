import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableData } from '../../model/table-data';

@Component({
    selector: 'szbd-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input()
    columns: string[];
    @Input()
    data: TableData[];
    @Input()
    withFooter = false;
    @Output()
    select = new EventEmitter<string>();

    constructor() {}

    ngOnInit() {}

    returnRowValue(val: string): void {
        this.select.emit(val);
    }
}
