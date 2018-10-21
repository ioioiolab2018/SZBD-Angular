import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginPanelModule } from './login-panel/login-panel.module';

const appRoutes: Routes = [
];

@NgModule({
    imports: [
        LoginPanelModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
