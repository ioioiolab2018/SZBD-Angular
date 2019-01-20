import { GradeType } from './enum/grade-type';

export class Grade {
    constructor(
        public id: number,
        public studentIndex: number,
        public studySubjectId: number,
        public date: Date,
        public value: number,
        public type: GradeType
    ) {}
}
