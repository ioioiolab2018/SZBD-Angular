import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'szbd-questionnaires',
    templateUrl: './questionnaires.component.html',
    styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnInit {
    columns: string[];

    constructor() {
        this.columns = ['Temat', 'Data od', 'Data do', 'Dostępna'];
    }

    ngOnInit() {}
}
