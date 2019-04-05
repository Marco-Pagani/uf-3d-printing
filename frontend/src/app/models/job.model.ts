export class Job {
    _id: String;
    status: Number;
    name: String;
    email: String;
    phone?: String;
    affiliation: {
        kind: String;
        major: String;
        department: String;
        course: Boolean;
        coursecode: String
    };
    publicity: Boolean;
    locationPref: String;
    makerLoc?: String;
    cost?: Number;
    entryDate: String;
    paymentDate?: String;
    updateDate: String;
    staffNotes?: String;
    staffName?: String;
}
