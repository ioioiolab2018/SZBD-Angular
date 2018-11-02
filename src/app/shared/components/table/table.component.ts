import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableData } from '../../model/table-data';
import { TableValue } from '../../model/table_value';

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
    select = new EventEmitter<TableValue>();

    constructor() {}

    ngOnInit() {}

    returnRowValue(val: TableData): void {
        this.select.emit(new TableValue(val.id, val.column1));
    }
}
