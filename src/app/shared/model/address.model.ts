import { AddressType } from './enum/address-type';

export class Address {
    constructor(
        public id: number,
        public personId: string,
        public town: string,
        public street: string,
        public zipCode: string,
        public houseNumber: number,
        public apartmentNumber: number,
        public addressType: AddressType
    ) {}
}
