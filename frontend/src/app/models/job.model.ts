export class Job {
    _id: string;
    name: String;
    email: String;
    phone?: string;
    affiliation: String;
    major: String;
    forACourse: Boolean;
    photoAllow: Boolean;
    status: Number;
    pickupLocation: String;
    entryDate: String;
    paymentDate?: String;
}
