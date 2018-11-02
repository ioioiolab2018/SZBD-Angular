import { Component, OnInit } from '@angular/core';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
    selectedSemester: string;
    grades: GradeInformation[];
    columns: string[];
    data: TableData[];

    constructor() {
        this.grades = [
            new GradeInformation('Komunikacja człowiek komputer', 'wykład'),
            new GradeInformation('Inżynieria Oprogramowania', 'wykład'),
            new GradeInformation('Sztuczna inteligencja', 'laboratorium')
        ];
        this.columns = ['Semestr', 'Data zaliczenia', 'Ocena'];
        this.data = [
            new TableData(1, 'I', '20.02.2018', '4.8'),
            new TableData(2, 'II', '28.06.2018', '4.67')
        ];
    }

    ngOnInit() {}

    getGrades(val: TableValue): void {
        this.selectedSemester = val.column;
    }
}
