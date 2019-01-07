import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPanelComponent } from './student-panel.component';
import { InformationComponent } from './components/information/information.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { GradesComponent } from './components/grades/grades.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { NewProposalComponent } from './components/new-proposal/new-proposal.component';
import { AuthGuardService } from 'src/app/auth/guards/auth-guard.service';

const loginRouting: Routes = [
    {
        path: 'student',
        component: StudentPanelComponent,
        canActivate: [AuthGuardService],
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
                path: 'proposals/new',
                component: NewProposalComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class StudentPanelRoutingModule {}
