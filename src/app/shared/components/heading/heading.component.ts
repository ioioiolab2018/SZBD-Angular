import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'szbd-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
    @Input()
    heading: string;
    @Input()
    value: string;

    constructor() {}

    ngOnInit() {}
}
