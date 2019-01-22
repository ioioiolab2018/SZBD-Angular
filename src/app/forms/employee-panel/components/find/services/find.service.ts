import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/forms/student-panel/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class FindService {
    private studentColumnNames: string[] = [];

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initColumnNames();
    }

    private initColumnNames(): void {
        this.studentColumnNames = ['Imię', 'Nazwisko', 'PESEL', 'Semestr'];
    }

    getStudentColumnNames(): Array<string> {
        return this.studentColumnNames;
    }
}
