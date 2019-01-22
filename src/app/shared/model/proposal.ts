export class Proposal {
    constructor(
        public id?: number,
        public personId?: string,
        public topic?: string,
        public content?: string,
        public submissionDate?: Date,
        public shortAnswer?: string,
        public answer?: string,
        public answerDate?: Date
    ) {}
}
