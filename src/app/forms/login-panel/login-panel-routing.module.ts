import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPanelComponent } from './login-panel.component';

const loginRouting: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPanelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class LoginPanelRoutingModule { }
