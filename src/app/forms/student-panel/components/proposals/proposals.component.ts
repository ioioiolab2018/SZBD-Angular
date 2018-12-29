import { Component } from '@angular/core';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { Proposal } from 'src/app/shared/model/proposal';
import { ProposalService } from './services/proposal.service';

@Component({
    selector: 'app-proposals',
    templateUrl: './proposals.component.html',
    styleUrls: ['./proposals.component.scss'],
    providers: [ProposalService]
})
export class ProposalsComponent {
    columns: string[];
    data: TableData[];
    proposal: Proposal;

    constructor(private proposalService: ProposalService) {
        this.init();
    }

    private init(): void {
        this.proposalService.getColumnNamesObs().subscribe((val: string[]) => {
            this.columns = val;
        });
        this.proposalService.getProposalsObs().subscribe((val: TableData[]) => {
            this.data = val;
        });
        this.proposalService.getProposalObs().subscribe((val: Proposal) => {
            this.proposal = val;
        });
    }

    getProposal(val: TableValue): void {
        if (val.id !== this.proposal.id) {
            this.proposalService.getProposal(val.id);
        }
    }
}
