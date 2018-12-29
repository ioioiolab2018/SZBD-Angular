export class Questionnaire {
    constructor(
        public questionnaireId?: number,
        public personId?: string,
        public name?: string,
        public content?: string,
        public options?: string[],
        public answer?: string,
        public date?: Date,
        public available?: string
    ) {}
}
