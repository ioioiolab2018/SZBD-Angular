import { Component } from '@angular/core';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { Subject } from 'src/app/shared/model/subject';
import { SemesterData } from 'src/app/shared/model/semester-data';
import { SubjectService } from './services/subject.service';

@Component({
    selector: 'szbd-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss'],
    providers: [SubjectService]
})
export class SubjectsComponent {
    subjects: SemesterData[];
    subject: Subject;
    dataFilterOptions: MenuOption[];

    constructor(private subjectService: SubjectService) {
        this.init();
    }

    private init(): void {
        this.subjectService
            .getDataFilterOptionsObs()
            .subscribe((val: MenuOption[]) => {
                this.dataFilterOptions = val;
            });
        this.subjectService
            .getSubjectsObs()
            .subscribe((val: SemesterData[]) => {
                this.subjects = val;
            });
        this.subjectService.getSubjectObs().subscribe((val: Subject) => {
            this.subject = val;
        });
    }

    getSubjects(val: string): void {
        this.subjectService.getSubjects(val);
    }

    getSubject(val: number): void {
        this.subjectService.getSubject(val);
    }
}
