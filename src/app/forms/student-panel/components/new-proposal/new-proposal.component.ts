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
export class NewProposalComponent implements OnInit {
    proposalForm: FormGroup;
    constructor(private proposalService: ProposalService) {
        this.proposalForm = new FormGroup({
            topic: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {}

    sendProposal(): void {
        this.proposalService.saveProposal(
            new Proposal(
                null,
                this.proposalForm.value.topic,
                this.proposalForm.value.content,
                new Date()
            )
        );
    }
}
