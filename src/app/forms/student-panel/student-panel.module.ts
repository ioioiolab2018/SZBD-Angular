import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from './student-panel.component';
import { StudentPanelRoutingModule } from './student-panel-routing';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { InformationComponent } from './components/information/information.component';
import { GradesComponent } from './components/grades/grades.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { HeadingModule } from 'src/app/shared/components/heading/heading.module';
import { GradeInformationModule } from 'src/app/shared/components/grade-information/grade-information.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'src/app/shared/components/select-button/select-button.module';

@NgModule({
    imports: [
        CommonModule,
        GradeInformationModule,
        HeadingModule,
        MenuModule,
        ReactiveFormsModule,
        SelectButtonModule,
        StudentPanelRoutingModule,
        TableModule
    ],
    declarations: [
        GradesComponent,
        InformationComponent,
        MenuComponent,
        ProposalsComponent,
        QuestionnairesComponent,
        StudentPanelComponent,
        SubjectsComponent,
        NewProposalComponent
    ]
})
export class StudentPanelModule {}
