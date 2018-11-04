import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Proposal } from 'src/app/shared/model/proposal';

@Injectable()
export class ProposalService {
    constructor(private httpService: HttpService) {}

    saveProposal(val: Proposal): void {
        this.httpService.saveProposal(val);
    }
}
