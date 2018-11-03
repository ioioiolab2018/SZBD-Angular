import { Component, OnInit } from '@angular/core';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { GradeService } from './services/grade.service';

@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.scss'],
    providers: [GradeService]
})
export class GradesComponent {
    selectedSemester: string;
    grades: GradeInformation[];
    columns: string[];
    data: TableData[];

    constructor(private gradeService: GradeService) {
        this.init();
    }

    private init(): void {
        this.gradeService.getColumnNamesObs().subscribe((val: string[]) => {
            this.columns = val;
        });
        this.gradeService.getSemestersObs().subscribe((val: TableData[]) => {
            this.data = val;
            this.selectedSemester = val[val.length - 1].column1;
        });
        this.gradeService
            .getGradesObs()
            .subscribe((val: GradeInformation[]) => {
                this.grades = val;
            });
    }

    getGrades(val: TableValue): void {
        this.selectedSemester = val.column;
        this.gradeService.getGrades(val.id);
    }
}
