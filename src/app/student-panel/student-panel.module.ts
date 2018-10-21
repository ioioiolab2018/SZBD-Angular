import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from './student-panel.component';
import { StudentPanelRoutingModule } from './student-panel-routing';

@NgModule({
    imports: [
        CommonModule,
        StudentPanelRoutingModule
    ],
    declarations: [StudentPanelComponent]
})
export class StudentPanelModule { }
