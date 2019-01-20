export class QuestionnaireView {
    constructor(
        public name?: string,
        public content?: string,
        public options?: Option[],
    ) {}
}

export class Option {
    constructor(public name: string, public count: number) {}
}
