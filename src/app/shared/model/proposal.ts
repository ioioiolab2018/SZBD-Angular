export class Proposal {
    constructor(
        public id?: number,
        public topic?: string,
        public content?: string,
        public submissionDate?: Date,
        public answer?: string,
        public shortAnswer?: string,
        public answerDate?: Date
    ) {}
}
