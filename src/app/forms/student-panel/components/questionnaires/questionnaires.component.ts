import { Component } from '@angular/core';
import { Questionnaire } from 'src/app/shared/model/questionnaire';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { QuestionnaireService } from './services/questionnaire.service';
import { QuestionnaireAnswer, QuestionnaireAnswerIdentity } from 'src/app/shared/model/questionnaire-answer';

@Component({
    selector: 'szbd-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss'],
    providers: [QuestionnaireService]
})
export class QuestionnairesComponent {
    columns: string[];
    data: TableData[];
    questionnaire: Questionnaire;
    questionnaireForm: FormGroup;
    dataFilterOptions: MenuOption[];

    constructor(private questionnaireService: QuestionnaireService) {
        this.questionnaireForm = new FormGroup({
            answer: new FormControl('', Validators.required)
        });
        this.init();
    }

    private init(): void {
        this.questionnaireService
            .getColumnNamesObs()
            .subscribe((val: string[]) => {
                this.columns = val;
            });
        this.questionnaireService
            .getDataFilterOptionsObs()
            .subscribe((val: MenuOption[]) => {
                this.dataFilterOptions = val;
            });
        this.questionnaireService
            .getQuestionnairesObs()
            .subscribe((val: TableData[]) => {
                this.data = val;
                if (val.length) {
                    this.questionnaireService
                        .getQuestionnaireObs()
                        .subscribe((val2: Questionnaire) => {
                            if (val2 != null) {
                                this.questionnaire = val2;
                                this.questionnaireForm.patchValue({
                                    answer: this.questionnaire.answer
                                });
                            }
                        });
                }
            });
    }

    getQuestionnaire(val: TableValue): void {
        this.questionnaireService.getQuestionnaire(val.id);
    }

    getQuestionnaires(filter: string): void {
        this.questionnaireService.getQuestionnaires(filter);
    }

    saveQuestionnnaire(): void {
        this.questionnaireService.saveQuestionnaire(
            new QuestionnaireAnswer(
                new QuestionnaireAnswerIdentity(
                    this.questionnaire.questionnaireId,
                    this.questionnaire.personId),
                this.questionnaireForm.value.answer,
                new Date()
            )
        );
    }
}
