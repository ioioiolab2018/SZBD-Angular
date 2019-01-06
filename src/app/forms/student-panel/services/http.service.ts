import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';
import { Questionnaire } from 'src/app/shared/model/questionnaire';
import { Subject } from 'src/app/shared/model/subject';
import { Observable, BehaviorSubject } from 'rxjs';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { SemesterData } from 'src/app/shared/model/semester-data';
import { QuestionnaireAnswer } from 'src/app/shared/model/questionnaire-answer';
import { StudentInformation } from 'src/app/shared/model/student-information';
import { Authentication } from 'src/app/shared/model/authentication';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private studentInformationUrl = 'api/student/student-info/';
    private studentQuestionnairesListUrl = 'api/student/questionnaires/';
    private studentQuestionnaireUrl = 'api/student/questionnaire/';
    private studentProposalsListUrl = 'api/commons/proposals/';
    private studentProposalUrl = 'api/commons/proposal/';
    private studentSubjectsListUrl = 'api/commons/student-subjects/';
    private studentSubjectUrl = 'api/commons/subject/';
    private studentSemestersListUrl = 'api/student/semesters/';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, private router: Router) { }

    private getAuthentication(): Authentication {
        return JSON.parse(localStorage.getItem('authentication'));
    }

    getStudentInformations(): Observable<StudentInformation> {
        return this.http.get<StudentInformation>(this.studentInformationUrl + this.getAuthentication().username)
    }

    getSemesters(): Observable<Array<TableData>> {
        return this.http.get<Array<TableData>>(this.studentSemestersListUrl + this.getAuthentication().username);
    }

    getGrades(id: number): Observable<Array<GradeInformation>> {
        return new BehaviorSubject<Array<GradeInformation>>([
            new GradeInformation('Komunikacja człowiek komputer', 'wykład'),
            new GradeInformation('Inżynieria Oprogramowania', 'wykład'),
            new GradeInformation('Sztuczna inteligencja', 'laboratorium')
        ]).asObservable();
    }

    getInformations(): Observable<StudentInformation> {
        return new BehaviorSubject<StudentInformation>(
            new StudentInformation()
        ).asObservable();
    }

    getProposals(): Observable<Array<TableData>> {
        return this.http.get<Array<TableData>>(this.studentProposalsListUrl + this.getAuthentication().username);
    }

    getProposal(id: number): Observable<Proposal> {
        return this.http.get<Proposal>(this.studentProposalUrl + id);
    }

    saveProposal(val: Proposal): void {
        val.personId = this.getAuthentication().username;
        this.http.post<Proposal>(this.studentProposalUrl, val, this.httpOptions).subscribe(() => this.router.navigate(['/student/proposals']));
    }

    getQuestionnaires(filter: string): Observable<Array<TableData>> {
        const options = { params: new HttpParams().set('filter', filter) };
        return this.http.get<Array<TableData>>(this.studentQuestionnairesListUrl + this.getAuthentication().username, options);
    }

    getQuestionnaire(id: number): Observable<Questionnaire> {
        const options = { params: new HttpParams().set('student', this.getAuthentication().username) };
        return this.http.get<Questionnaire>(this.studentQuestionnaireUrl + id, options);
    }

    saveQuestionnaire(val: QuestionnaireAnswer): void {
        this.http.post<QuestionnaireAnswer>(this.studentQuestionnaireUrl, val, this.httpOptions).subscribe();
    }

    getSubjects(filter: string): Observable<Array<SemesterData>> {
        const options = { params: new HttpParams().set('filter', filter) };
        return this.http.get<Array<SemesterData>>(this.studentSubjectsListUrl + this.getAuthentication().username, options);
    }

    getSubject(id: number): Observable<Subject> {
        return this.http.get<Subject>(this.studentSubjectUrl + id);
    }
}
