import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPanelModule } from './forms/login-panel/login-panel.module';
import { StudentPanelModule } from './forms/student-panel/student-panel.module';
import { EmployeePanelModule } from './forms/employee-panel/employee-panel.module';

const appRoutes: Routes = [
    {
        path: '*',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        LoginPanelModule,
        EmployeePanelModule,
        StudentPanelModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
