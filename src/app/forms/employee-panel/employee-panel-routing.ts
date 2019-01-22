import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePanelComponent } from './employee-panel.component';
import { EmployeeAuthGuardService } from 'src/app/auth/guards/employee-auth-guard.service';
import { FindComponent } from './components/find/find.component';
import { CreateComponent } from './components/create/create.component';
import { RateComponent } from './components/rate/rate.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { ProposalsComponent } from './components/proposals/proposals.component';

const loginRouting: Routes = [
    {
        path: 'employee',
        component: EmployeePanelComponent,
        canActivate: [EmployeeAuthGuardService],
        children: [
            {
                path: '',
                redirectTo: 'find',
                pathMatch: 'full'
            },
            {
                path: 'find',
                component: FindComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'rate',
                component: RateComponent
            },
            {
                path: 'questionnaires',
                component: QuestionnairesComponent
            },
            {
                path: 'proposals',
                component: ProposalsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class EmployeePanelRoutingModule {}
