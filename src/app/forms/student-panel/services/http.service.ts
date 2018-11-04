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
        return new BehaviorSubject<Array<TableData>>([
            new TableData(1, 'Piniążki', '20.11.2018', '21.11.2018', 'T'),
            new TableData(2, 'Poprawka', '13.09.2018', '21.09.2018', 'N')
        ]).asObservable();
    }

    getProposal(id: number): Observable<Proposal> {
        return new BehaviorSubject<Proposal>(
            new Proposal(
                1,
                'Piniążki',
                // tslint:disable-next-line:max-line-length
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sed in cupiditate veniam, numquam quia laborum eveniet minima maiores labore, quod, quidem asperiores non eos. Molestiae, neque iste. Reprehenderit, maxime.Itaque accusantium facere in voluptatibus animi ut a reprehenderit fugit labore consequatur et eum deserunt sint, corrupti velit culpa nemo doloribus ducimus consequuntur. Natus fuga amet soluta. Eveniet, obcaecati tenetur.Blanditiis cupiditate in suscipit eaque officiis consequuntur labore qui aliquam et eos. Esse quos quisquam repellat excepturi perspiciatis vel aut molestiae doloribus reprehenderit aperiam ducimus debitis officiis, nulla placeat quo.Ut voluptatem perferendis aliquid, officia ipsa sapiente dignissimos ipsam eius architecto molestiae commodi iure necessitatibus facere aut laborum sint, odio enim ducimus sed. Molestias velit, reiciendis optio obcaecati quasi facilis!Ea nulla officia assumenda. Quod maiores illo asperiores nobis, quis labore eaque enim molestias quae magni dolorem odit est facere laboriosam quibusdam modi blanditiis aperiam esse voluptatem dignissimos necessitatibus! Qui!',
                new Date(),
                // tslint:disable-next-line:max-line-length
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sed in cupiditate veniam, numquam quia laborum eveniet minima maiores labore, quod, quidem asperiores non eos. Molestiae, neque iste. Reprehenderit, maxime.Itaque accusantium facere in voluptatibus animi ut a reprehenderit fugit labore consequatur et eum deserunt sint, corrupti velit culpa nemo doloribus ducimus consequuntur.',
                'T',
                new Date()
            )
        ).asObservable();
    }

    saveProposal(val): void {}

    getQuestionnaires(): Observable<Array<TableData>> {
        return new BehaviorSubject<Array<TableData>>([
            new TableData(
                1,
                'Piniążki',
                new Date().toDateString(),
                new Date().toDateString(),
                'F'
            ),
            new TableData(
                1,
                'Wolne',
                new Date().toDateString(),
                new Date().toDateString(),
                'T'
            )
        ]).asObservable();
    }

    getQuestionnaire(id: number): Observable<Questionnaire> {
        return new BehaviorSubject<Questionnaire>(
            new Questionnaire(
                1,
                'Piniążki',
                // tslint:disable-next-line:max-line-length
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia vel consequuntur quam accusantium atque similique, expedita blanditiis quod provident illum labore quibusdam nemo sunt, placeat nobis quia cumque deleniti? Vero, harum iure? Odit vitae nobis, nulla vero vel nihil iusto reiciendis deserunt. Blanditiis voluptatem porro accusantium quam, voluptas impedit iure quae unde. Nemo, facilis libero. Modi debitis possimus mollitia. Corporis corrupti, doloribus exercitationem quo cum neque? A ipsum fugit quod quas dolores rem labore fugiat, dolore nulla laudantium, laborum magni sed voluptatibus praesentium aperiam necessitatibus pariatur fuga distinctio explicabo! Ratione pariatur aperiam iure perferendis hic culpa necessitatibus numquam nihil in recusandae temporibus fugiat beatae mollitia magni, repellendus provident labore. Ipsum quisquam vitae molestias placeat doloribus deleniti veniam quae pariatur? Nam esse aperiam nihil ipsum molestias, distinctio nostrum laudantium, illum quos dicta ea asperiores. Ipsa magnam sit libero earum quos distinctio ut veniam. Cum enim harum aspernatur sapiente aliquam facere.',
                ['tak', 'nie'],
                'tak',
                new Date(),
                'F'
            )
        );
    }

    saveQuestionnaire(val): void {}

    getSubjects(): Observable<Array<SemesterData>> {
        return null;
    }

    getSubject(id: number): Observable<Subject> {
        return null;
    }
}
