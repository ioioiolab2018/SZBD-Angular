import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table-data';
import { GradeInformation } from 'src/app/shared/model/grade-information';

@Injectable()
export class GradeService {
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private gradesObs = new BehaviorSubject<Array<GradeInformation>>([]);
    private semestersDataObs = new BehaviorSubject<Array<TableData>>([]);

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
        this.httpService.getSemesters().subscribe((val: TableData[]) => {
            this.semestersDataObs.next(val);
            this.getGrades(val[val.length - 1].id);
        });
    }

    private initColumnNames(): void {
        this.columnNamesObs.next(['Semestr', 'Data zaliczenia', 'Ocena']);
    }

    getColumnNamesObs(): Observable<Array<string>> {
        return this.columnNamesObs.asObservable();
    }

    getGradesObs(): Observable<Array<GradeInformation>> {
        return this.gradesObs.asObservable();
    }

    getSemestersObs(): Observable<Array<TableData>> {
        return this.semestersDataObs.asObservable();
    }

    getGrades(id: number): void {
        this.httpService.getGrades(id).subscribe((val: GradeInformation[]) => {
            this.gradesObs.next(val);
        });
    }
}
