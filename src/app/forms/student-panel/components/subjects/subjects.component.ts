import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/shared/model/table-data';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { Subject } from 'src/app/shared/model/subject';
import { SemesterData } from 'src/app/shared/model/semester-data';

@Component({
    selector: 'szbd-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    subjects: SemesterData[];
    subject: Subject;
    dataFilterOptions: MenuOption[];

    constructor() {
        this.dataFilterOptions = [
            new MenuOption('Zaliczone', 'COMPLETED'),
            new MenuOption('Wszystkie', 'ALL'),
            new MenuOption('Niezaliczone', 'FAILED')
        ];
        this.subjects = [
            new SemesterData('I', [
                new TableData(1, 'Matematyka', 'ktos', 5, 'T'),
                new TableData(2, 'Informatyka', 'ktos2', 6, 'T')
            ]),
            new SemesterData('I', [
                new TableData(3, 'Sieci komputerowe', 'ktos', 4, 'F'),
                new TableData(4, 'Bazy danych', 'ktos3', 5, 'T')
            ])
        ];
    }

    ngOnInit() {}

    getSubjects(): void {}

    getSubject(val: TableData): void {
        this.subject = new Subject(
            val.id,
            val.column1,
            // tslint:disable-next-line:max-line-length
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sed in cupiditate veniam, numquam quia laborum eveniet minima maiores labore, quod, quidem asperiores non eos. Molestiae, neque iste. Reprehenderit, maxime.\nItaque accusantium facere in voluptatibus animi ut a reprehenderit fugit labore consequatur et eum deserunt sint, corrupti velit culpa nemo doloribus ducimus consequuntur. \nNatus fuga amet soluta. Eveniet, obcaecati tenetur.Blanditiis cupiditate in suscipit eaque officiis consequuntur labore qui aliquam et eos. Esse quos quisquam repellat excepturi perspiciatis vel aut molestiae doloribus reprehenderit aperiam ducimus debitis officiis, nulla placeat quo.Ut voluptatem perferendis aliquid, officia ipsa sapiente dignissimos ipsam eius architecto molestiae commodi iure necessitatibus facere aut laborum sint, odio enim ducimus sed. Molestias velit, reiciendis optio obcaecati quasi facilis!Ea nulla officia assumenda. \nQuod maiores illo asperiores nobis, quis labore eaque enim molestias quae magni dolorem odit est facere laboriosam quibusdam modi blanditiis aperiam esse voluptatem dignissimos necessitatibus! Qui!',
            val.column2,
            val.column3,
            0
        );
    }
}
