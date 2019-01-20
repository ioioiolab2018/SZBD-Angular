import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table-data';
import { HttpService } from '../../../services/http.service';
import { QuestionnaireView } from 'src/app/shared/model/questionnaire-view';
import { Filter } from 'src/app/shared/model/filter';

@Injectable()
export class QuestionnaireService {
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private questionnairesObs = new BehaviorSubject<Array<TableData>>([]);
    private questionnaireObs = new BehaviorSubject<QuestionnaireView>(null);

    private oldFilter: Filter = new Filter('');

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
        this.getQuestionnaires(this.oldFilter);
    }

    private initColumnNames(): void {
        this.columnNamesObs.next([
            'Temat',
            'Data od',
            'Data do',
            'Liczba odp.'
        ]);
    }

    getQuestionnaires(filter: Filter): void {
        if (filter.firstFilter !== this.oldFilter.firstFilter) {
            this.oldFilter = filter;
            this.httpService
                .getQuestionnaires(filter.firstFilter)
                .subscribe((val: TableData[]) => {
                    this.questionnairesObs.next(val);
                });
        }
    }

    getQuestionnaire(id: number): void {
        this.httpService
            .getQuestionnaire(id)
            .subscribe((val: QuestionnaireView) => {
                this.questionnaireObs.next(val);
            });
    }

    getColumnNamesObs(): Observable<Array<string>> {
        return this.columnNamesObs.asObservable();
    }

    getQuestionnairesObs(): Observable<Array<TableData>> {
        return this.questionnairesObs.asObservable();
    }

    getQuestionnaireObs(): Observable<QuestionnaireView> {
        return this.questionnaireObs.asObservable();
    }
}
