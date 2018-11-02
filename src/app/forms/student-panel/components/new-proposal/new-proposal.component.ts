import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-new-proposal',
    templateUrl: './new-proposal.component.html',
    styleUrls: ['./new-proposal.component.scss']
})
export class NewProposalComponent implements OnInit {
    proposalForm: FormGroup;
    constructor() {
        this.proposalForm = new FormGroup({
            topic: new FormControl(''),
            content: new FormControl('')
        });
    }

    ngOnInit() {}

    sendProposal(): void {}
}
