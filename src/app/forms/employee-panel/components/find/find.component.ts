import { Component, OnInit } from '@angular/core';
import { FindService } from './services/find.service';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';

@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
    styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
    columns: string[] = [];
    data: TableData[] = [];

    constructor(private findService: FindService) {
        this.getColumnNames('student');
    }

    ngOnInit() {}

    private getColumnNames(val: string): void {
        switch (val) {
            case 'student':
                this.columns = this.findService.getStudentColumnNames();
                break;
        }
    }

    getInformation(val: TableValue): void {}
}
