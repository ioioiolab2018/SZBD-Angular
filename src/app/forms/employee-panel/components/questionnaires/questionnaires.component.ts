import { Component } from '@angular/core';
import { QuestionnaireService } from './services/questionnaire.service';
import { TableData } from 'src/app/shared/model/table-data';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { TableValue } from 'src/app/shared/model/table_value';
import { QuestionnaireView } from 'src/app/shared/model/questionnaire-view';
import { Filter } from 'src/app/shared/model/filter';

@Component({
    selector: 'app-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss'],
    providers: [QuestionnaireService]
})
export class QuestionnairesComponent {
    columns: string[];
    data: TableData[];
    questionnaire: QuestionnaireView;
    dataFilterOptions: MenuOption[];

    constructor(private questionnaireService: QuestionnaireService) {
        this.init();
    }

    private init(): void {
        this.questionnaireService
            .getColumnNamesObs()
            .subscribe((val: string[]) => {
                this.columns = val;
            });
        this.questionnaireService
            .getQuestionnairesObs()
            .subscribe((val: TableData[]) => {
                this.data = val;
            });
        this.questionnaireService
            .getQuestionnaireObs()
            .subscribe((val2: QuestionnaireView) => {
                if (val2 != null) {
                    this.questionnaire = val2;
                }
            });
    }

    getQuestionnaire(val: TableValue): void {
        this.questionnaireService.getQuestionnaire(val.id);
    }

    getQuestionnaires(filter: Filter): void {
        this.questionnaireService.getQuestionnaires(filter);
    }
}
