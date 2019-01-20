import { Component, OnInit } from '@angular/core';
import { RateService } from './services/rate.service';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { Student, ListItem } from 'src/app/shared/model/student';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Grade } from 'src/app/shared/model/grade.model';
import { GradeType } from 'src/app/shared/model/enum/grade-type';

@Component({
    selector: 'app-rate',
    templateUrl: './rate.component.html',
    styleUrls: ['./rate.component.scss'],
    providers: [RateService]
})
export class RateComponent implements OnInit {
    columns: string[] = [];
    data: TableData[] = [];
    subjects: ListItem[] = [];
    student: Student = null;
    rateForm: FormGroup;
    semester: number;

    constructor(private rateService: RateService) {
        this.init();
    }

    ngOnInit() {}

    private init(): void {
        this.initRateForm();
        this.getColumnNames();
        this.getStudentsList();
        this.getStudentObs();
        this.getSubjectsList();
    }

    private initRateForm(): void {
        this.rateForm = new FormGroup({
            subject: new FormControl('', Validators.required),
            value: new FormControl(3, Validators.required),
            type: new FormControl(GradeType.FIRST, Validators.required)
        });
    }

    private getColumnNames(): void {
        this.columns = this.rateService.getStudentColumnNames();
    }

    private getStudentsList(): void {
        this.rateService.getStudentsObs().subscribe((val: TableData[]) => {
            this.data = val;
        });
    }

    private getStudentObs(): void {
        this.rateService.getStudentObs().subscribe((student: Student) => {
            if (student) {
                this.student = student;
                this.getSubjects(
                    student.semesters[student.semesters.length - 1].ret
                );
            }
        });
    }

    getSubjectsList(): void {
        this.rateService
            .getSubjectsList()
            .subscribe((val: ListItem[]) => (this.subjects = val));
    }

    getStudent(val: TableValue): void {
        this.rateService.getStudent(val.id);
    }

    getSubjects(val: number): void {
        this.semester = val;
        this.rateService.getSubjects(val);
    }

    saveGrade(): void {
        const subjectId = this.rateForm.value.subject;
        const gradeValue = this.rateForm.value.value;
        const gradeType = this.rateForm.value.type;
        const grade = new Grade(
            null,
            this.student.index,
            subjectId,
            new Date(),
            gradeValue,
            gradeType
        );
        this.rateService.saveGrade(grade);
        this.getSubjects(this.semester);
    }
}
