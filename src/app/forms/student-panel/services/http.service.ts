import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';
import { Questionnaire } from 'src/app/shared/model/questionnaire';
import { Subject } from 'src/app/shared/model/subject';
import { Observable, BehaviorSubject } from 'rxjs';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { SemesterData } from 'src/app/shared/model/semester-data';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getSemesters(): Observable<Array<TableData>> {
        // return this.http.get<Array<TableData>>('');
        return new BehaviorSubject<Array<TableData>>([
            new TableData(1, 'I', '20.02.2018', '4.8'),
            new TableData(2, 'II', '28.06.2018', '4.67')
        ]).asObservable();
    }

    getGrades(id: number): Observable<Array<GradeInformation>> {
        return new BehaviorSubject<Array<GradeInformation>>([
            new GradeInformation('Komunikacja człowiek komputer', 'wykład'),
            new GradeInformation('Inżynieria Oprogramowania', 'wykład'),
            new GradeInformation('Sztuczna inteligencja', 'laboratorium')
        ]).asObservable();
    }

    getInformations(): Observable<any> {
        return null;
    }

    getProposals(): Observable<Array<TableData>> {
        return null;
    }

    getProposal(id: number): Observable<Proposal> {
        return null;
    }

    saveProposal(val): void {}

    getQuestionnaires(): Observable<Array<TableData>> {
        return null;
    }

    getQuestionnaire(id: number): Observable<Questionnaire> {
        return null;
    }

    saveQuestionnaire(val): void {}

    getSubjects(): Observable<Array<SemesterData>> {
        return null;
    }

    getSubject(id: number): Observable<Subject> {
        return null;
    }
}
