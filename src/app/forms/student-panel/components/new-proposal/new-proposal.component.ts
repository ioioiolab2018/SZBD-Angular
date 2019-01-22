import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProposalService } from './services/proposal.service';
import { Proposal } from 'src/app/shared/model/proposal';

@Component({
    selector: 'app-new-proposal',
    templateUrl: './new-proposal.component.html',
    styleUrls: ['./new-proposal.component.scss'],
    providers: [ProposalService]
})
export class NewProposalComponent {
    proposalForm: FormGroup;
    constructor(private proposalService: ProposalService) {
        this.proposalForm = new FormGroup({
            topic: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required)
        });
    }

    sendProposal(): void {
        const date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        this.proposalService.saveProposal(
            new Proposal(
                null,
                null,
                this.proposalForm.value.topic,
                this.proposalForm.value.content,
                date
            )
        );
    }
}
