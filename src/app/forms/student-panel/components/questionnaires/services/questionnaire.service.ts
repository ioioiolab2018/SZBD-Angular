import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table-data';
import { Questionnaire } from 'src/app/shared/model/questionnaire';
import { HttpService } from '../../../services/http.service';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { QuestionnaireAnswer } from 'src/app/shared/model/questionnaire-answer';

@Injectable()
export class QuestionnaireService {
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private dataFilterOptionsObs = new BehaviorSubject<Array<MenuOption>>([]);
    private questionnairesObs = new BehaviorSubject<Array<TableData>>([]);
    private questionnaireObs = new BehaviorSubject<Questionnaire>(null);

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
        this.initDataFilterOptions();
        this.getQuestionnaires('ALL');
    }

    private initColumnNames(): void {
        this.columnNamesObs.next(['Temat', 'Data od', 'Data do', 'Dostępna']);
    }

    private initDataFilterOptions(): void {
        this.dataFilterOptionsObs.next([
            new MenuOption('Otwarte', 'T'),
            new MenuOption('Wszystkie', 'ALL'),
            new MenuOption('Zamknięte', 'F')
        ]);
    }

    getQuestionnaires(filter: string): void {
        this.httpService
            .getQuestionnaires(filter)
            .subscribe((val: TableData[]) => {
                this.questionnairesObs.next(val);
                this.getQuestionnaire(val[0].id);
            });
    }

    getQuestionnaire(id: number): void {
        this.httpService
            .getQuestionnaire(id)
            .subscribe((val: Questionnaire) => {
                this.questionnaireObs.next(val);
            });
    }

    getColumnNamesObs(): Observable<Array<string>> {
        return this.columnNamesObs.asObservable();
    }

    getDataFilterOptionsObs(): Observable<Array<MenuOption>> {
        return this.dataFilterOptionsObs.asObservable();
    }

    getQuestionnairesObs(): Observable<Array<TableData>> {
        return this.questionnairesObs.asObservable();
    }

    getQuestionnaireObs(): Observable<Questionnaire> {
        return this.questionnaireObs.asObservable();
    }

    saveQuestionnaire(val: QuestionnaireAnswer): void {
        this.httpService.saveQuestionnaire(val);
    }
}
