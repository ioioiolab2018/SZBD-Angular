import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPanelComponent } from './student-panel.component';
import { InformationComponent } from './components/information/information.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { GradesComponent } from './components/grades/grades.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { SettingsComponent } from './components/settings/settings.component';

const loginRouting: Routes = [
    {
        path: 'student',
        component: StudentPanelComponent,
        children: [
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full'
            },
            {
                path: 'info',
                component: InformationComponent
            },
            {
                path: 'grades',
                component: GradesComponent
            },
            {
                path: 'subjects',
                component: SubjectsComponent
            },
            {
                path: 'proposals',
                component: ProposalsComponent
            },
            {
                path: 'questionnaires',
                component: QuestionnairesComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class StudentPanelRoutingModule {}
