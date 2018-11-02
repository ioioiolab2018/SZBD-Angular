import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from './student-panel.component';
import { StudentPanelRoutingModule } from './student-panel-routing';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { InformationComponent } from './components/information/information.component';
import { GradesComponent } from './components/grades/grades.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { HeadingModule } from 'src/app/shared/components/heading/heading.module';
import { GradeInformationModule } from 'src/app/shared/components/grade-information/grade-information.module';
import { TableModule } from 'src/app/shared/components/table/table.module';

@NgModule({
    imports: [
        CommonModule,
        GradeInformationModule,
        HeadingModule,
        MenuModule,
        StudentPanelRoutingModule,
        TableModule
    ],
    declarations: [
        GradesComponent,
        InformationComponent,
        MenuComponent,
        ProposalsComponent,
        QuestionnairesComponent,
        SettingsComponent,
        StudentPanelComponent,
        SubjectsComponent
    ]
})
export class StudentPanelModule {}
