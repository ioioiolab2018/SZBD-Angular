export class StudySubject {
    constructor(
        public id: number,
        public groupId: number,
        public lecturerId: number,
        public name: string,
        public ectsValue: number,
        public description: string
    ) {}
}
