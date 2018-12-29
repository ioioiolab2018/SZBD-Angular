import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentInformation } from 'src/app/shared/model/student-information';

@Injectable()
export class InformationService {
    private informationsObs = new BehaviorSubject<StudentInformation>(null);

    constructor(private httpService: HttpService) {
        this.getInformations();
    }

    private getInformations(): void {
        this.httpService.getStudentInformations().subscribe((val: StudentInformation) => {
            this.informationsObs.next(val);
        });
    }

    getInformationsObs(): Observable<StudentInformation> {
        return this.informationsObs.asObservable();
    }
}
