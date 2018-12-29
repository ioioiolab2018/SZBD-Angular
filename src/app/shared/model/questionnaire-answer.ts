export class QuestionnaireAnswer {
    constructor(
        public questionnaireAnswerIdentity: QuestionnaireAnswerIdentity,
        public answer: string,
        public date: Date
    ) { }
}

export class QuestionnaireAnswerIdentity {
    constructor(
        public questionnaireId: number,
        public personId: string
    ) { }
}