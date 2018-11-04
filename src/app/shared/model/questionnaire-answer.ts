export class QuestionnaireAnswer {
    constructor(
        public id: number,
        public questionnaire: number,
        public answer: string,
        public answerDate: Date,
        public person: string = null
    ) {}
}
