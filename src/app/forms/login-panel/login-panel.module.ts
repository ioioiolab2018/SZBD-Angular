import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPanelComponent } from './login-panel.component';
import { LoginPanelRoutingModule } from './login-panel-routing.module';

@NgModule({
    imports: [CommonModule, LoginPanelRoutingModule],
    declarations: [LoginPanelComponent]
})
export class LoginPanelModule {}
