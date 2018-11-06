import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelComponent } from './login-panel.component';
import { LoginPanelRoutingModule } from './login-panel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LoginPanelRoutingModule, ReactiveFormsModule],
    declarations: [LoginPanelComponent]
})
export class LoginPanelModule {}
