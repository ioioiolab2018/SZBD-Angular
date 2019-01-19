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
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { HeadingModule } from 'src/app/shared/components/heading/heading.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';

@NgModule({
    imports: [
        CommonModule,
        EmployeePanelRoutingModule,
        HeadingModule,
        MenuModule,
        ReactiveFormsModule,
        SearchModule,
        TableModule
    ],
    declarations: [
        EmployeePanelComponent,
        MenuComponent,
        FindComponent,
        CreateComponent,
        RateComponent,
        QuestionnairesComponent,
        ProposalsComponent
    ],
    providers: [HttpService]
})
export class EmployeePanelModule {}
