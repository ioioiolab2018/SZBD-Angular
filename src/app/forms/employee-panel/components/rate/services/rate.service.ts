import { Injectable } from '@angular/core';
import { Filter } from 'src/app/shared/model/filter';
import { TableData } from 'src/app/shared/model/table-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Student, ListItem } from 'src/app/shared/model/student';
import { Grade } from 'src/app/shared/model/grade.model';

@Injectable()
export class RateService {
    private studentColumnNames: string[] = [];
    private studentsObs = new BehaviorSubject<Array<TableData>>([]);
    private studentObs = new BehaviorSubject<Student>(new Student(132319, 'Piotr', '', 'Stachowiak', [new ListItem(12, 'Semestr1'), new ListItem(12, 'Semestr1')]));
    private subjectsObs = new BehaviorSubject<Array<ListItem>>([]);

    private oldFilter: Filter = new Filter('');

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
        this.getStudents(this.oldFilter);
    }

    private initColumnNames(): void {
        this.studentColumnNames = ['Indeks', 'Imię', 'Nazwisko', 'Semestr'];
    }

    getStudentColumnNames(): Array<string> {
        return this.studentColumnNames;
    }

    getStudents(filter: Filter): void {
        if (filter.firstFilter !== this.oldFilter.firstFilter) {
            this.oldFilter = filter;
            this.httpService
                .getStudents(filter.firstFilter)
                .subscribe((val: TableData[]) => {
                    this.studentsObs.next(val);
                });
        }
    }

    getStudent(index: number): void {
        this.httpService
            .getStudentInformations(index)
            .subscribe((val: Student) => this.studentObs.next(val));
    }

    getSubjects(groupId: number): void {
        this.httpService
            .getSubjectsList(groupId)
            .subscribe((val: ListItem[]) => this.subjectsObs.next(val));
    }

    getStudentsObs(): Observable<Array<TableData>> {
        return this.studentsObs.asObservable();
    }

    getStudentObs(): Observable<Student> {
        return this.studentObs.asObservable();
    }

    getSubjectsList(): Observable<Array<ListItem>> {
        return this.subjectsObs.asObservable();
    }

    saveGrade(grade: Grade) {
        this.httpService.saveGrade(grade);
    }
}
