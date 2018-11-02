import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeInformationComponent } from './grade-information.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GradeInformationComponent],
    exports: [GradeInformationComponent]
})
export class GradeInformationModule {}
