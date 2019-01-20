export class Student {
    constructor(
        public index: number,
        public firstName: string,
        public secondName: string,
        public surname: string,
        public semesters: ListItem[]
    ) {}
}

export class ListItem {
    constructor(public ret: number, public dsp: string) {}
}
