export class Questionnaire {
    constructor(
        public id: number,
        public name: string,
        public content: string,
        public options: string,
        public startDate: Date,
        public endDate: Date,
        public single: string
    ) {}
}
