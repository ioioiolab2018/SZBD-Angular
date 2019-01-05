import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'src/app/shared/model/subject';
import { SemesterData } from 'src/app/shared/model/semester-data';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { HttpService } from '../../../services/http.service';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    private dataFilterOptionsObs = new BehaviorSubject<Array<MenuOption>>([]);
    private subjectsObs = new BehaviorSubject<Array<SemesterData>>([]);
    private subjectObs = new BehaviorSubject<Subject>(null);

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initDataFilterOptions();
        this.getSubjects('ALL');
    }

    private initDataFilterOptions(): void {
        this.dataFilterOptionsObs.next([
            new MenuOption('Zaliczone', 'T'),
            new MenuOption('Wszystkie', 'ALL'),
            new MenuOption('Niezaliczone', 'F')
        ]);
    }

    getSubjects(filter: string): void {
        this.httpService
            .getSubjects(filter)
            .subscribe((val: SemesterData[]) => {
                this.subjectsObs.next(val);
                if (val.length && val[0].data.length) {
                    this.getSubject(val[0].data[0].id);
                }
            });
    }

    getSubject(id: number): void {
        this.httpService.getSubject(id).subscribe((val: Subject) => {
            this.subjectObs.next(val);
        });
    }

    getDataFilterOptionsObs(): Observable<Array<MenuOption>> {
        return this.dataFilterOptionsObs.asObservable();
    }

    getSubjectsObs(): Observable<Array<SemesterData>> {
        return this.subjectsObs.asObservable();
    }

    getSubjectObs(): Observable<Subject> {
        return this.subjectObs.asObservable();
    }
}
