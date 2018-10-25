import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from './student-panel.component';
import { StudentPanelRoutingModule } from './student-panel-routing';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

@NgModule({
    imports: [
        CommonModule,
        StudentPanelRoutingModule,
        MenuModule
    ],
    declarations: [StudentPanelComponent, MenuComponent]
})
export class StudentPanelModule { }
