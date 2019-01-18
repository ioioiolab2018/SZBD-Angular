import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePanelComponent } from './employee-panel.component';
import { EmployeePanelRoutingModule } from './employee-panel-routing';
import { MenuComponent } from './components/menu/menu.component';
import { FindComponent } from './components/find/find.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { CreateComponent } from './components/create/create.component';
import { RateComponent } from './components/rate/rate.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';
import { ProposalsComponent } from './components/proposals/proposals.component';

@NgModule({
    imports: [CommonModule, EmployeePanelRoutingModule, MenuModule],
    declarations: [
        EmployeePanelComponent,
        MenuComponent,
        FindComponent,
        CreateComponent,
        RateComponent,
        QuestionnairesComponent,
        ProposalsComponent
    ]
})
export class EmployeePanelModule {}
