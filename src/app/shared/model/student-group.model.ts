import { StudyMode } from './enum/study-mode';
import { StudyType } from './enum/study-type';

export class StudentGroup {
    constructor(
        public id: number,
        public faculty: string,
        public studyField: string,
        public studyMode: StudyMode,
        public type: StudyType,
        public semster: number,
        public startDate: Date = new Date(),
        public endDate: Date = null
    ) {}
}
