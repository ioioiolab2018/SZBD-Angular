import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';
import { Subject } from 'src/app/shared/model/subject';
import { Observable, BehaviorSubject } from 'rxjs';
import { GradeInformation } from 'src/app/shared/model/grade-information';
import { SemesterData } from 'src/app/shared/model/semester-data';
import { QuestionnaireAnswer } from 'src/app/shared/model/questionnaire-answer';
import { StudentInformation } from 'src/app/shared/model/student-information';
import { Authentication } from 'src/app/shared/model/authentication';
import { Router } from '@angular/router';
import { Filter } from 'src/app/shared/model/filter';
import { QuestionnaireView } from 'src/app/shared/model/questionnaire-view';
import { Student, ListItem } from 'src/app/shared/model/student';
import { Grade } from 'src/app/shared/model/grade.model';

@Injectable()
export class HttpService {
    private studentsListUrl = 'api/student/student-info/';
    private studentInformationUrl = 'api/student/student-info/';
    private subjectsListUrl = 'api/student/student-info/';
    private gradeUrl = 'api/student/student-info/';
    private questionnairesListUrl = 'api/commons/questionnaires/';
    private questionnaireUrl = 'api/employee/questionnaire/';
    private proposalsListUrl = 'api/commons/proposals/';
    private proposalUrl = 'api/commons/proposal/';
    private studentSubjectsListUrl = 'api/commons/student-subjects/';
    private studentSubjectUrl = 'api/commons/subject/';
    private studentSemestersListUrl = 'api/student/semesters/';
    private studentGradesListUrl = 'api/student/grades/';

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, private router: Router) {}

    private getAuthentication(): Authentication {
        return JSON.parse(localStorage.getItem('authentication'));
    }

    getSemesters(): Observable<Array<TableData>> {
        return this.http.get<Array<TableData>>(
            this.studentSemestersListUrl + this.getAuthentication().username
        );
    }

    getGrades(id: number): Observable<Array<GradeInformation>> {
        const options = {
            params: new HttpParams().set(
                'username',
                this.getAuthentication().username
            )
        };
        return this.http.get<Array<GradeInformation>>(
            this.studentGradesListUrl + id,
            options
        );
    }

    getInformations(): Observable<StudentInformation> {
        return new BehaviorSubject<StudentInformation>(
            new StudentInformation()
        ).asObservable();
    }

    // =========================  RATE  ========================= //
    getStudents(filter: string): Observable<Array<TableData>> {
        const options = { params: new HttpParams().set('index', filter) };
        return this.http.get<Array<TableData>>(this.studentsListUrl, options);
    }

    getStudentInformations(index: number): Observable<Student> {
        return this.http.get<Student>(this.studentInformationUrl + index);
    }

    getSubjectsList(groupId: number): Observable<Array<ListItem>> {
        return this.http.get<Array<ListItem>>(this.subjectsListUrl + groupId);
    }

    saveGrade(grade: Grade): void {
        this.http
            .post<Proposal>(this.gradeUrl, grade, this.httpOptions)
            .subscribe();
    }

    // =========================  PROPOSALS  ========================= //
    getProposals(filter: Filter): Observable<Array<TableData>> {
        const options = {
            params: new HttpParams()
                .set('index', filter.firstFilter)
                .set('answer', filter.secondFilter)
        };
        return this.http.get<Array<TableData>>(this.proposalsListUrl, options);
    }

    getProposal(id: number): Observable<Proposal> {
        return this.http.get<Proposal>(this.proposalUrl + id);
    }

    saveProposal(val: Proposal): void {
        this.http
            .post<Proposal>(this.proposalUrl, val, this.httpOptions)
            .subscribe();
    }

    // =========================  QUESTIONNAIRES  ========================= //
    getQuestionnaires(questionnaireName: string): Observable<Array<TableData>> {
        const options = {
            params: new HttpParams().set('name', questionnaireName)
        };
        return this.http.get<Array<TableData>>(
            this.questionnairesListUrl,
            options
        );
    }

    getQuestionnaire(id: number): Observable<QuestionnaireView> {
        return this.http.get<QuestionnaireView>(this.questionnaireUrl + id);
    }

    saveQuestionnaire(val: QuestionnaireAnswer): void {
        this.http
            .post<QuestionnaireAnswer>(
                this.questionnaireUrl,
                val,
                this.httpOptions
            )
            .subscribe();
    }

    // =========================  COS  ========================= //
    getSubjects(filter: string): Observable<Array<SemesterData>> {
        const options = { params: new HttpParams().set('filter', filter) };
        return this.http.get<Array<SemesterData>>(
            this.studentSubjectsListUrl + this.getAuthentication().username,
            options
        );
    }

    getSubject(id: number): Observable<Subject> {
        return this.http.get<Subject>(this.studentSubjectUrl + id);
    }
}
