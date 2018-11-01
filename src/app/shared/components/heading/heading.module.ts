import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeadingComponent],
    exports: [HeadingComponent]
})
export class HeadingModule {}
