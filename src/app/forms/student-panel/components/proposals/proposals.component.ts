import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/shared/model/table-data';
import { TableValue } from 'src/app/shared/model/table_value';
import { Proposal } from 'src/app/shared/model/proposal';

@Component({
    selector: 'app-proposals',
    templateUrl: './proposals.component.html',
    styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
    columns: string[];
    data: TableData[];
    proposal: Proposal;

    constructor() {
        this.columns = [
            'Temat',
            'Data złożenia',
            'Data odpowiedzi',
            'Odpowiedź'
        ];
        this.data = [
            new TableData(1, 'Piniążki', '20.11.2018', '21.11.2018', 'T'),
            new TableData(2, 'Poprawka', '13.09.2018', '21.09.2018', 'N')
        ];
    }

    ngOnInit() {}

    getProposal(val: TableValue) {
        this.proposal = new Proposal(
            val.id,
            val.column,
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sed in cupiditate veniam, numquam quia laborum eveniet minima maiores labore, quod, quidem asperiores non eos. Molestiae, neque iste. Reprehenderit, maxime.Itaque accusantium facere in voluptatibus animi ut a reprehenderit fugit labore consequatur et eum deserunt sint, corrupti velit culpa nemo doloribus ducimus consequuntur. Natus fuga amet soluta. Eveniet, obcaecati tenetur.Blanditiis cupiditate in suscipit eaque officiis consequuntur labore qui aliquam et eos. Esse quos quisquam repellat excepturi perspiciatis vel aut molestiae doloribus reprehenderit aperiam ducimus debitis officiis, nulla placeat quo.Ut voluptatem perferendis aliquid, officia ipsa sapiente dignissimos ipsam eius architecto molestiae commodi iure necessitatibus facere aut laborum sint, odio enim ducimus sed. Molestias velit, reiciendis optio obcaecati quasi facilis!Ea nulla officia assumenda. Quod maiores illo asperiores nobis, quis labore eaque enim molestias quae magni dolorem odit est facere laboriosam quibusdam modi blanditiis aperiam esse voluptatem dignissimos necessitatibus! Qui!'
        );
    }
}
