export class Questionnaire {
    constructor(
        public id?: number,
        public name?: string,
        public content?: string,
        public options?: any,
        public answer?: string,
        public date?: Date,
        public available?: string
    ) {}
}
