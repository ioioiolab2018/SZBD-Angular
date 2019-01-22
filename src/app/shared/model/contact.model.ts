import { ContactType } from './enum/contact-type';
import { SecondContactType } from './enum/second-contact-type';

export class Contact {
    constructor(
        public id: number,
        public personId: string,
        public contactType: ContactType,
        public value: string,
        public type: SecondContactType
    ) {}
}
