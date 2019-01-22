import { SexType } from './enum/sex-type';
import { RoleType } from './enum/role-type';

export class Person {
    constructor(
        public pesel: string,
        public name: string,
        public secondName: string,
        public surname: string,
        public birthDate: Date,
        public birthPlace: string,
        public fatherName: string,
        public motherName: string,
        public sex: SexType,
        public role: RoleType
    ) {}
}
