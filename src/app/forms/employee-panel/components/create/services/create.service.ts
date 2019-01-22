import { Injectable } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { MenuOption } from 'src/app/shared/model/menu-option';
import { Person } from 'src/app/shared/model/person.model';
import { Student } from 'src/app/shared/model/student.model';
import { Address } from 'src/app/shared/model/address.model';
import { Contact } from 'src/app/shared/model/contact.model';
import { Lecturer } from 'src/app/shared/model/lecturer.model';
import { StudentGroup } from 'src/app/shared/model/student-group.model';
import { Questionnaire } from 'src/app/shared/model/questionnaire.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table-data';
import { Filter } from 'src/app/shared/model/filter';
import { TableValue } from 'src/app/shared/model/table_value';

@Injectable()
export class CreateService {
    private objectsTypesList: MenuOption[] = [];
    private tableDataObs = new BehaviorSubject<Array<TableData>>([]);
    private columnNamesObs = new BehaviorSubject<Array<string>>([]);
    private selectedRowValueObs = new BehaviorSubject<any>({ _type: '' });

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initObjectsTypesList();
        this.getColumnNames('semester');
    }

    private initObjectsTypesList(): void {
        this.objectsTypesList = [
            new MenuOption('Student', 'student'),
            new MenuOption('Wykładowca', 'lecturer'),
            new MenuOption('Semestr', 'semester'),
            new MenuOption('Przedmiot', 'subject'),
            new MenuOption('Ankieta', 'questionnaire')
        ];
    }

    getObjectsNamesList(): Array<MenuOption> {
        return this.objectsTypesList;
    }

    getColumnNamesObs(): Observable<Array<string>> {
        return this.columnNamesObs.asObservable();
    }

    getColumnNames(val: string): void {
        switch (val) {
            case 'student':
                this.columnNamesObs.next([
                    'Indeks',
                    'Imię',
                    'Nazwisko',
                    'Semestr'
                ]);
                break;
            case 'lecturer':
                this.columnNamesObs.next([
                    'Indeks',
                    'Imię',
                    'Nazwisko',
                    'Stopień naukowy'
                ]);
                break;
            case 'semester':
                this.columnNamesObs.next([
                    'Wydział',
                    'Kierunek',
                    'Semestr',
                    'Data rozpoczęcia'
                ]);
                break;
            case 'subject':
                this.columnNamesObs.next([
                    'Nazwa',
                    'Prowadzący',
                    'Punkty ECTS',
                    'Semestr'
                ]);
                break;
            case 'questionnaire':
                this.columnNamesObs.next([
                    'Temat',
                    'Data od',
                    'Data do',
                    'Edytowalna'
                ]);
                break;
        }
    }

    getTableDataObs(): Observable<Array<TableData>> {
        return this.tableDataObs.asObservable();
    }

    filterTableDate(filter: Filter, tableDataType: string): void {
        switch (tableDataType) {
            case 'student':
                this.httpService
                    .getStudents(filter.firstFilter)
                    .subscribe((val: TableData[]) => {
                        this.tableDataObs.next(val);
                    });
                break;
            case 'lecturer':
                break;
            case 'semester':
                break;
            case 'subject':
                break;
            case 'questionnaire':
                break;
        }
    }

    getSelectedRowValueObs(): Observable<any> {
        return this.selectedRowValueObs.asObservable();
    }

    private savePerson(person: Person): void {
        this.httpService.savePerson(person);
    }

    private saveAddresses(addresses: Address[]): void {
        this.httpService.saveAddresses(addresses);
    }

    private saveContacts(contacts: Contact[]): void {
        this.httpService.saveContacts(contacts);
    }

    saveStudent(
        person: Person,
        student: Student,
        addresses: Address[],
        contacts: Contact[]
    ): void {
        this.savePerson(person);
        this.httpService.saveStudent(student);
        this.saveAddresses(addresses);
        this.saveContacts(contacts);
    }

    saveLecturer(
        person: Person,
        lecturer: Lecturer,
        addresses: Address[],
        contacts: Contact[]
    ): void {
        this.savePerson(person);
        this.httpService.saveLecturer(lecturer);
        this.saveAddresses(addresses);
        this.saveContacts(contacts);
    }

    saveStudentGroup(studentGroup: StudentGroup): void {
        this.httpService.saveStudentGroup(studentGroup);
    }

    saveQuestionnaire(questionnaire: Questionnaire): void {
        this.httpService.saveQuestionnaire(questionnaire);
    }

    getStudentData(val: string): void {
        const result = {
            _type: 'student',
            person: {},
            address: {},
            contact: {}
        };
        this.httpService.getPerson(val).subscribe((val2: Person) => {
            result.person = val2;
            this.httpService
                .getAddresses(val2.pesel)
                .subscribe((val3: Address[]) => {
                    result.address = val3;
                    this.httpService
                        .getContacts(val2.pesel)
                        .subscribe((val4: Contact[]) => {
                            result.contact = val4;
                            console.log(result);
                            this.selectedRowValueObs.next(result);
                        });
                });
        });
    }

    getLecturerData(val: string): void {
        const result = {
            _type: 'lecturer',
            person: {},
            address: {},
            contact: {},
            academicDegree: '',
            office: ''
        };
        this.httpService.getPerson(val).subscribe((val2: Person) => {
            val2.birthDate = new Date(val2.birthDate);
            result.person = val2;
            this.httpService.getLecturer(val).subscribe((val3: Lecturer) => {
                result.academicDegree = val3.academicDegree;
                result.office = val3.office;
                this.httpService
                    .getAddresses(val)
                    .subscribe((val4: Address[]) => {
                        result.address = val4;
                        this.httpService
                            .getContacts(val)
                            .subscribe((val5: Contact[]) => {
                                result.contact = val5;
                                this.selectedRowValueObs.next(result);
                            });
                    });
            });
        });
    }

    getSemesterData(val: number): void {
        const result = {
            _type: 'semester',
            faculty: '',
            studyField: '',
            studyMode: '',
            type: '',
            startDate: '',
            endDate: ''
        };
        this.selectedRowValueObs.next(result);
    }

    getSubjectData(val: number): void {
        const result = {
            _type: 'subject',
            faculty: '',
            studyField: '',
            studyMode: '',
            type: '',
            semester: '',
            startDate: '',
            endDate: ''
        };
        this.selectedRowValueObs.next(result);
    }

    getQuestionnaireData(val: number): void {
        const result = {
            _type: 'questionnaire',
            name: '',
            content: '',
            answerOptions: [],
            startDate: '',
            endDate: '',
            single: ''
        };
        this.selectedRowValueObs.next(result);
    }
}
