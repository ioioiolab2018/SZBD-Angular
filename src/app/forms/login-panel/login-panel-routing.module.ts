import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPanelComponent } from './login-panel.component';
import { LoginGuardService } from 'src/app/auth/guards/login-guard.service';

const loginRouting: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPanelComponent,
        canActivate: [LoginGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})
export class LoginPanelRoutingModule {}
