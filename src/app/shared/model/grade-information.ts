export class GradeInformation {
    constructor(
        public subject?: string,
        public subjectType?: string,
        public lecturer?: string,
        public date?: Date,
        public firstGrade?: number,
        public secondGrade?: number
    ) {}
}
