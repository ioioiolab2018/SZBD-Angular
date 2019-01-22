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

@Injectable()
export class CreateService {
    private objectsTypesList: MenuOption[] = [];
    private tableDataObs = new BehaviorSubject<Array<TableData>>([]);

    constructor(private httpService: HttpService) {
        this.init();
    }

    private init() {
        this.initObjectsTypesList();
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

    getTableDataObs(): Observable<Array<TableData>> {
        return this.tableDataObs.asObservable();
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
}
