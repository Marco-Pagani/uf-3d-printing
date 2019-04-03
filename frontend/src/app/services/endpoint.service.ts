import { Injectable } from '@angular/core';

/**
 * Middleware service for talking to our backend
 *
 * TODO: Request data from our backend
 */
@Injectable({
    providedIn: 'root',
})
export class EndpointService {
    getPendingJobs() {
        // Example data
        return [{
            id: 123456789,
            status: 0,
            pickupLocation: 'Marston Science Library',
            name: 'John Smith',
            entryDate: '2019-02-23 13:02:01',
            paymentDate: ''
        }, {
            id: 987654321,
            status: 0,
            pickupLocation: 'Education Library',
            name: 'Salty Shell',
            entryDate: '2019-01-10 08:10:00',
            paymentDate: ''
        }, {
            id: 219384782,
            status: 1,
            pickupLocation: 'Marston Science Library',
            name: 'Bob Teller',
            entryDate: '2019-02-17 17:45:10',
            paymentDate: ''
        }, {
            id: 123842398,
            status: 1,
            pickupLocation: 'Health Science Center',
            name: 'Kyle Pauler',
            entryDate: '2019-02-28 23:22:50',
            paymentDate: ''
        }, {
            id: 678954321,
            status: 6,
            pickupLocation: 'Health Science Center',
            name: 'George Terry',
            entryDate: '2019-02-21 13:33:59',
            paymentDate: ''
        }];
    }

    getMarstonJobs() {
        // Example data
        return [{
            id: 928712372,
            status: 2,
            pickupLocation: 'Marston Science Library',
            name: 'James Carver',
            entryDate: '2019-02-23 13:02:01',
            paymentDate: ''
        }, {
            id: 812394884,
            status: 3,
            pickupLocation: 'Marston Science Library',
            name: 'Figgus Archer',
            entryDate: '2019-01-10 08:10:00',
            paymentDate: '2019-01-15 09:20:00'
        }, {
            id: 212356748,
            status: 5,
            pickupLocation: 'Marston Science Library',
            name: 'George Timothy',
            entryDate: '2019-01-15 13:09:10',
            paymentDate: '2019-01-16 08:10:30'
        }, {
            id: 123492000,
            status: 4,
            pickupLocation: 'Marston Science Library',
            name: 'Albert Paul',
            entryDate: '2019-01-25 14:20:10',
            paymentDate: '2019-01-26 19:40:52'
        }];
    }

    getHealthJobs() {
        // Example data
        return [{
            id: 123456789,
            status: 4,
            pickupLocation: 'Health Science Center',
            name: 'Samantha Sollus',
            entryDate: '2018-12-24 11:01:01',
            paymentDate: ''
        }, {
            id: 218349873,
            status: 3,
            pickupLocation: 'Health Science Center',
            name: 'Salty Shell',
            entryDate: '2018-12-29 06:14:00',
            paymentDate: '2019-1-04 15:44:00'
        }, {
            id: 727342477,
            status: 5,
            pickupLocation: 'Marston Science Library',
            name: 'Richard Banks',
            entryDate: '2019-01-17 19:45:10',
            paymentDate: '2019-01-20 12:54:10'
        }];
    }

    getEducationJobs() {
        // Example data
        return [{
            id: 728349949,
            status: 4,
            pickupLocation: 'Education Library',
            name: 'Wes Snipes',
            entryDate: '2019-02-23 19:55:01',
            paymentDate: '2019-02-23 21:05:01'
        }, {
            id: 293478989,
            status: 6,
            pickupLocation: 'Education Library',
            name: 'Jimmy Chun',
            entryDate: '2019-03-05 08:10:00',
            paymentDate: ''
        }, {
            id: 773272778,
            status: 2,
            pickupLocation: 'Education Library',
            name: 'Laurell Pok',
            entryDate: '2019-02-14 17:45:10',
            paymentDate: ''
        }];
    }
}
