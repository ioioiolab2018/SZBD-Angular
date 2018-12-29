import { SexType } from "./enum/sex-type";
import { StudyType } from "./enum/study-type";
import { StudyMode } from "./enum/study-mode";
import { StudentStatus } from "./enum/student-status";

export class StudentInformation {
    constructor(
        public name?: string,
        public secondName?: string,
        public surname?: string,
        public pesel?: string,
        public birthPlace?: string,
        public birthDate?: Date,
        public fatherName?: string,
        public motherName?: string,
        public sex?: SexType,
        public email?: string,
        public phone?: string,
        public address?: string,
        public contactAddress?: string,
        public temporaryAddress?: string,
        public index?: string,
        public semester?: string,
        public faculty?: string,
        public studyField?: string,
        public studyMode?: StudyMode,
        public type?: StudyType,
        public status?: StudentStatus,
        public ectsPoints?: number,
        public startDate?: Date,
        public endDate?: Date
    ) { }
}
