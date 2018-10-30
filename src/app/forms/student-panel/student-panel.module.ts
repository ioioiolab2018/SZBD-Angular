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

@NgModule({
    imports: [
        CommonModule,
        HeadingModule,
        StudentPanelRoutingModule,
        MenuModule
    ],
    declarations: [
        StudentPanelComponent,
        MenuComponent,
        InformationComponent,
        GradesComponent,
        SubjectsComponent,
        ProposalsComponent,
        SettingsComponent,
        QuestionnairesComponent
    ]
})
export class StudentPanelModule {}
