import { Component, OnInit, Input } from '@angular/core';
import { GradeInformation } from '../../model/grade-information';

@Component({
    selector: 'szbd-grade-information',
    templateUrl: './grade-information.component.html',
    styleUrls: ['./grade-information.component.scss']
})
export class GradeInformationComponent implements OnInit {
    @Input()
    data: GradeInformation;

    constructor() {}

    ngOnInit() {}
}
