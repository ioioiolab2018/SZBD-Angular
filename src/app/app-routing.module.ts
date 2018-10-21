import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPanelModule } from './login-panel/login-panel.module';
import { StudentPanelModule } from './student-panel/student-panel.module';

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
        StudentPanelModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
