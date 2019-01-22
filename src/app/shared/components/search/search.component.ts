import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter } from '../../model/filter';

@Component({
    selector: 'szbd-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input()
    firstFilterName: string;
    @Input()
    secondFilterName: string;
    @Input()
    secondFilterOptions: string[];
    searchForm: FormGroup;

    oldFilter: Filter = new Filter('', '');

    @Output()
    filterEvent = new EventEmitter<Filter>();

    constructor() {}

    ngOnInit() {
        this.initSearchForm();
        this.patchValue();
        this.changeEvent();
    }

    private initSearchForm(): void {
        this.searchForm = new FormGroup({
            firstFilter: new FormControl(''),
            secondFilter: new FormControl('')
        });
    }

    private patchValue(): void {
        if (this.secondFilterOptions) {
            this.searchForm.patchValue({
                secondFilter: this.secondFilterOptions[0]
            });
        }
    }

    changeEvent(): void {
        const filter: Filter = new Filter();
        const firstValue = this.searchForm.value.firstFilter;
        const secondValue = this.searchForm.value.secondFilter;

        filter.firstFilter = firstValue;
        if (this.secondFilterOptions) {
            filter.secondFilter = secondValue;
        }

        if (
            this.oldFilter.firstFilter !== firstValue ||
            this.oldFilter.secondFilter !== secondValue
        ) {
            this.oldFilter = filter;
            this.filterEvent.emit(filter);
        }
    }
}
