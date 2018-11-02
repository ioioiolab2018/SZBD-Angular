import { Component, OnInit } from '@angular/core';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { TableData } from 'src/app/shared/model/table-data';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
    selectedSemester: number;
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
            new TableData('I', '20.02.2018', '4.8'),
            new TableData('II', '28.06.2018', '4.67')
        ];
    }

    ngOnInit() {}

    getGrades(val: number): void {
        this.selectedSemester = val;
    }
}
