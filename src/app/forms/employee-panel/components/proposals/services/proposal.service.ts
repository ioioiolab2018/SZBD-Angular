import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table-data';
import { Proposal } from 'src/app/shared/model/proposal';
import { Filter } from 'src/app/shared/model/filter';
import { HttpService } from '../../../services/http.service';

@Injectable()
export class ProposalService {
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private proposalsObs = new BehaviorSubject<Array<TableData>>([]);
    private proposalObs = new BehaviorSubject<Proposal>(null);

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
    }

    private initColumnNames(): void {
        this.columnNamesObs.next([
            'Temat',
            'Wnioskodawca',
            'Data złożenia',
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

    saveProposalAnswer(proposal: Proposal): void {
        this.httpService.saveProposal(proposal);
    }

    filterProposalsSet(filter: Filter): void {
        filter.secondFilter = (filter.secondFilter === 'Udzielono').toString();
        this.httpService.getProposals(filter).subscribe(
            (val: TableData[]) => {
                this.proposalsObs.next(val);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
