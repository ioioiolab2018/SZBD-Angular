import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPanelComponent } from './student-panel.component';
import { InformationComponent } from './components/information/information.component';

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
                path: 'subjects',
                component: InformationComponent
            }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class StudentPanelRoutingModule { }
