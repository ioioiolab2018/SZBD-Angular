import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';

@Injectable()
export class ProposalService {
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private proposalsObs = new BehaviorSubject<Array<TableData>>([]);
    private proposalObs = new BehaviorSubject<Proposal>(new Proposal());

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
        this.httpService.getProposals().subscribe((val: TableData[]) => {
            this.proposalsObs.next(val);
            this.getProposal(val[0].id);
        });
    }

    private initColumnNames(): void {
        this.columnNamesObs.next([
            'Temat',
            'Data złożenia',
            'Data odpowiedzi',
            'Odpowiedź'
        ]);
    }

    getProposal(id: number): void {
        this.httpService.getProposal(id).subscribe((val: Proposal) => {
            this.proposalObs.next(val);
        });
    }

    getColumnNamesObs(): Observable<Array<string>> {
        return this.columnNamesObs.asObservable();
    }

    getProposalsObs(): Observable<Array<TableData>> {
        return this.proposalsObs.asObservable();
    }

    getProposalObs(): Observable<Proposal> {
        return this.proposalObs.asObservable();
    }
}
