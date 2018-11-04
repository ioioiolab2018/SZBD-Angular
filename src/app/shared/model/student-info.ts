export class StudentInfo {
    constructor(
        public name?: string,
        public secondName?: string,
        public surname?: string,
        public pesel?: string,
        public birthplace?: string,
        public birthDate?: Date,
        public fatherName?: string,
        public motherName?: string,
        public sex?: string,
        public email?: string,
        public phone?: string,
        public address?: string,
        public contactAddress?: string,
        public temporaryAddress?: string,
        public index?: string,
        public semester?: string,
        public faculty?: string,
        public studyField?: string,
        public studyMode?: string,
        public type?: string,
        public status?: string,
        public ectsPoints?: number,
        public startDate?: Date,
        public endDate?: Date
    ) {}
}
