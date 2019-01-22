import { Component, OnInit } from '@angular/core';
import { CreateService } from './services/create.service';
import { MenuOption } from 'src/app/shared/model/menu-option';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormArray,
    FormControl
} from '@angular/forms';
import { Person } from 'src/app/shared/model/person.model';
import { Student } from 'src/app/shared/model/student.model';
import { Contact } from 'src/app/shared/model/contact.model';
import { Lecturer } from 'src/app/shared/model/lecturer.model';
import { Address } from 'src/app/shared/model/address.model';
import { StudentGroup } from 'src/app/shared/model/student-group.model';
import { Questionnaire } from 'src/app/shared/model/questionnaire.model';
import { TableData } from 'src/app/shared/model/table-data';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    providers: [CreateService]
})
export class CreateComponent implements OnInit {
    objectsTypesList: MenuOption[] = [];
    objectType = '';
    form: FormGroup = new FormGroup({});
    tableData: TableData[] = [];

    constructor(
        private createService: CreateService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.initObjectsTypesList();
        this.createService
            .getTableDataObs()
            .subscribe((val: TableData[]) => (this.tableData = val));
    }

    private initObjectsTypesList(): void {
        this.objectsTypesList = this.createService.getObjectsNamesList();
    }

    prepareForm(objectType: string): void {
        switch (objectType) {
            case 'student':
                this.form = this.newStudentGroup();
                this.objectType = 'student';
                break;
            case 'lecturer':
                this.form = this.newLecturerGroup();
                this.objectType = 'lecturer';
                break;
            case 'semester':
                this.form = this.newSemesterGroup();
                this.objectType = 'semester';
                break;
            case 'subject':
                this.form = this.newSubjectGroup();
                this.objectType = 'subject';
                break;
            case 'questionnaire':
                this.form = this.newQuestionnaireGroup();
                this.objectType = 'questionnaire';
                break;
        }
    }

    private newPersonGroup(): FormGroup {
        return this.fb.group({
            pesel: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.minLength(11),
                    Validators.maxLength(11)
                ]
            ],
            name: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            secondName: ['', [Validators.pattern('^[a-zA-Z]*$')]],
            surname: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            birthDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')],
            birthPlace: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            fatherName: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            motherName: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            sex: ['FEMALE', [Validators.required]],
            role: ['STUDENT', Validators.required]
        });
    }

    private newAdressGroup(): FormGroup {
        return this.fb.group({
            town: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            street: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            zipCode: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.minLength(5),
                    Validators.maxLength(5)
                ]
            ],
            houseNumber: [
                '',
                [Validators.required, Validators.pattern('^[0-9a-z]*$')]
            ],
            apartmentNumber: ['', [Validators.pattern('^[0-9]*$')]],
            addressType: ['DEFAULT', [Validators.required]]
        });
    }

    private newContactGroup(type: string): FormGroup {
        return this.fb.group({
            contactType: [type.toUpperCase(), [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: [
                '',
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.minLength(9),
                    Validators.maxLength(9)
                ]
            ],
            type: ['PRIVATE', [Validators.required]]
        });
    }

    private newStudentGroup(): FormGroup {
        return this.fb.group({
            person: this.newPersonGroup(),
            address: this.fb.array([this.newAdressGroup()]),
            contact: this.fb.array([this.newContactGroup('email')])
        });
    }

    private newLecturerGroup(): FormGroup {
        return this.fb.group({
            person: this.newPersonGroup(),
            address: this.fb.array([this.newAdressGroup()]),
            academicDegree: ['DR', [Validators.required]],
            office: [''],
            contact: this.fb.array([this.newContactGroup('email')])
        });
    }

    private newSubjectGroup(): FormGroup {
        return this.fb.group({
            faculty: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            studyField: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            studyMode: ['FULL_TIME', [Validators.required]],
            type: ['FIRST_DEGREE', [Validators.required]],
            startDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')],
            endDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]
        });
    }

    private newSemesterGroup(): FormGroup {
        return this.fb.group({
            faculty: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            studyField: [
                '',
                [Validators.required, Validators.pattern('^[a-zA-Z]*$')]
            ],
            studyMode: ['FULL_TIME', [Validators.required]],
            type: ['FIRST_DEGREE', [Validators.required]],
            startDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')],
            endDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')]
        });
    }

    private newQuestionnaireGroup(): FormGroup {
        return this.fb.group({
            name: ['', [Validators.required]],
            content: ['', [Validators.required]],
            answerOptions: this.fb.array([new FormControl('')]),
            startDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')],
            endDate: ['', Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')],
            single: ['T', Validators.required]
        });
    }

    shouldDisplay(val: string): boolean {
        console.log(val);
        if (this.objectType) {
            switch (val) {
                case 'person':
                    return (
                        this.objectType === 'student' ||
                        this.objectType === 'lecturer'
                    );
                case 'lecturer':
                    return this.objectType === 'lecturer';
                case 'semester':
                    return this.objectType === 'semester';
                case 'questionnaire':
                    return this.objectType === 'questionnaire';
                default:
                    return false;
            }
        } else {
            return false;
        }
    }

    addAddress(): void {
        if (this.addresses.length < 3) {
            this.addresses.push(this.newAdressGroup());
        }
    }

    get addresses() {
        return this.form.get('address') as FormArray;
    }

    addContact(): void {
        if (this.contacts.length < 3) {
            this.contacts.push(this.newContactGroup('email'));
        }
    }

    get contacts() {
        return this.form.get('contact') as FormArray;
    }

    addOption(): void {
        if (this.options.length < 5) {
            this.options.push(new FormControl(''));
        }
    }

    get options() {
        return this.form.get('answerOptions') as FormArray;
    }

    save(): void {
        const val = this.objectType;
        switch (val) {
            case 'lecturer':
            case 'student':
                const personId = this.form.value.person.pesel;
                const person: Person = new Person(
                    personId,
                    this.form.value.person.name,
                    this.form.value.person.secondName,
                    this.form.value.person.surname,
                    new Date(this.form.value.person.birthDate),
                    this.form.value.person.birthPlace,
                    this.form.value.person.fatherName,
                    this.form.value.person.motherName,
                    this.form.value.person.sex,
                    this.form.value.person.role
                );
                const contact: Contact[] = this.form.value.contact.map(
                    (element: any) =>
                        new Contact(
                            null,
                            personId,
                            element.contactType,
                            element[element.contactType.toLowerCase()],
                            element.type
                        )
                );
                const address: Address[] = this.form.value.address.map(
                    (element: any) =>
                        new Address(
                            null,
                            personId,
                            element.town,
                            element.street,
                            element.zipCode,
                            element.houseNumber,
                            element.apartmentNumber,
                            element.addressType
                        )
                );
                if (val === 'student') {
                    const student: Student = new Student(null, personId);
                    this.createService.saveStudent(
                        person,
                        student,
                        address,
                        contact
                    );
                } else {
                    const lecturer: Lecturer = new Lecturer(
                        null,
                        personId,
                        this.form.value.academicDegree,
                        this.form.value.office
                    );
                    this.createService.saveLecturer(
                        person,
                        lecturer,
                        address,
                        contact
                    );
                }
                break;
            case 'semester':
                const semester = new StudentGroup(
                    null,
                    this.form.value.faculty,
                    this.form.value.studyField,
                    this.form.value.studyMode,
                    this.form.value.type,
                    new Date(this.form.value.startDate),
                    new Date(this.form.value.endDate)
                );
                this.createService.saveStudentGroup(semester);
                break;
            case 'questionnaire':
                const questionnaire = new Questionnaire(
                    null,
                    this.form.value.name,
                    this.form.value.content,
                    this.form.value.answerOptions.join(';'),
                    new Date(this.form.value.startDate),
                    new Date(this.form.value.endDate),
                    this.form.value.single
                );
                this.createService.saveQuestionnaire(questionnaire);
                break;
        }
        this.objectType = '';
    }
}
