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
        return new BehaviorSubject<Array<SemesterData>>([
            new SemesterData('I', [
                new TableData(1, 'Matematyka', 'ktos', 5, 'T'),
                new TableData(2, 'Informatyka', 'ktos2', 6, 'T')
            ]),
            new SemesterData('I', [
                new TableData(3, 'Sieci komputerowe', 'ktos', 4, 'F'),
                new TableData(4, 'Bazy danych', 'ktos3', 5, 'T')
            ])
        ]).asObservable();
    }

    getSubject(id: number): Observable<Subject> {
        return new BehaviorSubject<Subject>(
            new Subject(
                1,
                'Informatyka',
                // tslint:disable-next-line:max-line-length
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sed in cupiditate veniam, numquam quia laborum eveniet minima maiores labore, quod, quidem asperiores non eos. Molestiae, neque iste. Reprehenderit, maxime.\nItaque accusantium facere in voluptatibus animi ut a reprehenderit fugit labore consequatur et eum deserunt sint, corrupti velit culpa nemo doloribus ducimus consequuntur. \nNatus fuga amet soluta. Eveniet, obcaecati tenetur.Blanditiis cupiditate in suscipit eaque officiis consequuntur labore qui aliquam et eos. Esse quos quisquam repellat excepturi perspiciatis vel aut molestiae doloribus reprehenderit aperiam ducimus debitis officiis, nulla placeat quo.Ut voluptatem perferendis aliquid, officia ipsa sapiente dignissimos ipsam eius architecto molestiae commodi iure necessitatibus facere aut laborum sint, odio enim ducimus sed. Molestias velit, reiciendis optio obcaecati quasi facilis!Ea nulla officia assumenda. \nQuod maiores illo asperiores nobis, quis labore eaque enim molestias quae magni dolorem odit est facere laboriosam quibusdam modi blanditiis aperiam esse voluptatem dignissimos necessitatibus! Qui!',
                'ktos2',
                4,
                0
            )
        );
    }
}
