import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';
import { TableValue } from 'src/app/shared/model/table_value';
import { ProposalService } from './services/proposal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Filter } from 'src/app/shared/model/filter';

@Component({
    selector: 'app-proposals',
    templateUrl: './proposals.component.html',
    styleUrls: ['./proposals.component.scss'],
    providers: [ProposalService]
})
export class ProposalsComponent implements OnInit {
    columns: string[];
    data: TableData[];
    proposal: Proposal = null;
    proposalAnswerForm: FormGroup;

    constructor(private proposalService: ProposalService) {}

    ngOnInit(): void {
        this.initProposalAnswerForm();
        this.init();
    }

    private init(): void {
        this.proposalService.getColumnNamesObs().subscribe((val: string[]) => {
            this.columns = val;
        });
        this.proposalService.getProposalsObs().subscribe((val: TableData[]) => {
            console.log(val);
            this.data = val;
        });

            this.proposalService.getProposalObs().subscribe((val: Proposal) => {
                if(val){
                this.proposal = val;
                this.patchFormValues();
        }});
    }

    private initProposalAnswerForm(): void {
        this.proposalAnswerForm = new FormGroup({
            answer: new FormControl('', Validators.required),
            shortAnswer: new FormControl('', Validators.required)
        });
    }

    private patchFormValues(): void {
        this.proposalAnswerForm.patchValue({
            answer: this.proposal.answer,
            shortAnswer: this.proposal.shortAnswer
        });
    }

    getProposal(val: TableValue): void {
       
        if (!this.proposal || val.id !== this.proposal.id) {
          this.proposalService.getProposal(val.id);
          console.log(this.proposal)
        }
    }

    saveProposalAnswer(): void {
        const proposal: Proposal = { ...this.proposal };
        proposal.answer = this.proposalAnswerForm.value.answer;
        proposal.shortAnswer = this.proposalAnswerForm.value.shortAnswer;
        proposal.answerDate = new Date();
        this.proposalService.saveProposalAnswer(proposal);
        this.getProposal(new TableValue(proposal.id, ''));
    }

    filterData(filter: Filter): void {
        this.proposalService.filterProposalsSet(filter);
    }
}
