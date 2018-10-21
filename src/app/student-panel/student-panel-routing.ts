import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPanelComponent } from './student-panel.component';

const loginRouting: Routes = [
    {
        path: 'student',
        component: StudentPanelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class StudentPanelRoutingModule { }
