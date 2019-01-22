import { AcademicDegree } from './enum/academic-degree';

export class Lecturer {
    constructor(
        public index: number,
        public personId: string,
        public academicDegree: AcademicDegree,
        public office: string,
        public startDate: Date = new Date(),
        public endDate: Date = null
    ) {}
}
