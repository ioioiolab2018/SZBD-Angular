import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentInfo } from 'src/app/shared/model/student-info';

@Injectable()
export class InformationService {
    private informationsObs = new BehaviorSubject<StudentInfo>(null);

    constructor(private httpService: HttpService) {
        this.getInformations();
    }

    private getInformations(): void {
        this.httpService.getInformations().subscribe((val: StudentInfo) => {
            this.informationsObs.next(val);
        });
    }

    getInformationsObs(): Observable<StudentInfo> {
        return this.informationsObs.asObservable();
    }
}
