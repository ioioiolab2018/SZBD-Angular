import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/shared/model/questionnaire';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuOption } from 'src/app/shared/model/menu-option';

@Component({
    selector: 'szbd-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnInit {
    columns: string[];
    data: TableData[];
    questionnaire: Questionnaire;
    questionnaireForm: FormGroup;
    dataFilterOptions: MenuOption[];

    constructor() {
        this.questionnaireForm = new FormGroup({ answer: new FormControl('') });
        this.columns = ['Temat', 'Data od', 'Data do', 'Dostępna'];
        this.data = [
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
        ];
        this.dataFilterOptions = [
            new MenuOption('Otwarte', 'OPENED'),
            new MenuOption('Wszystkie', 'ALL'),
            new MenuOption('Zamknięte', 'CLOSED')
        ];
    }

    ngOnInit() {}

    getQuestionnaire(val: TableValue): void {
        this.questionnaire = new Questionnaire(
            val.id,
            val.column,
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia vel consequuntur quam accusantium atque similique, expedita blanditiis quod provident illum labore quibusdam nemo sunt, placeat nobis quia cumque deleniti? Vero, harum iure? Odit vitae nobis, nulla vero vel nihil iusto reiciendis deserunt. Blanditiis voluptatem porro accusantium quam, voluptas impedit iure quae unde. Nemo, facilis libero. Modi debitis possimus mollitia. Corporis corrupti, doloribus exercitationem quo cum neque? A ipsum fugit quod quas dolores rem labore fugiat, dolore nulla laudantium, laborum magni sed voluptatibus praesentium aperiam necessitatibus pariatur fuga distinctio explicabo! Ratione pariatur aperiam iure perferendis hic culpa necessitatibus numquam nihil in recusandae temporibus fugiat beatae mollitia magni, repellendus provident labore. Ipsum quisquam vitae molestias placeat doloribus deleniti veniam quae pariatur? Nam esse aperiam nihil ipsum molestias, distinctio nostrum laudantium, illum quos dicta ea asperiores. Ipsa magnam sit libero earum quos distinctio ut veniam. Cum enim harum aspernatur sapiente aliquam facere.',
            ['tak', 'nie'],
            'tak',
            new Date(),
            val.column === 'Piniążki' ? 'F' : 'T'
        );
        this.questionnaireForm.patchValue({
            answer: this.questionnaire.answer
        });
    }

    getQuestionnaires(): void {}

    saveQuestionnnaire(): void {}
}
