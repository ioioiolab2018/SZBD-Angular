import { StudentStatus } from './enum/student-status';

export class Student {
    constructor(
        public index: number,
        public personId: string,
        public ectsPoints: number = 0,
        public startDate: Date = new Date(),
        public endDate: Date = null,
        public lastAverage: number = 0,
        public semester: number = 1,
        public status: StudentStatus = StudentStatus.STUDY,
        public studyYear: number = 1
    ) {}
}
