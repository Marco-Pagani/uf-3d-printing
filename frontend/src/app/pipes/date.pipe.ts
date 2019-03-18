import { Pipe, PipeTransform } from '@angular/core';
/*
 * Custom date pipe
*/
@Pipe({name: 'cdate'})
export class DatePipe implements PipeTransform {

    months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    /**
     * Converts hh:mm:ss -> hh:mm AM/PM
     * @param time hh:mm:ss
     */
    formatTime(time): string {
        time = time.split(':');
        let hour = parseInt(time[0], 10);
        const m = hour < 12 ? 'AM' : 'PM';
        hour = hour < 12 ? hour : hour - 12;
        const min = parseInt(time[1], 10);
        const minute = min < 10 ? '0' + min : '' + min;
        const seconds = parseInt(time[2], 10);
        return hour + ':' + minute + ' ' + m;
    }

    /**
     * Converts YYYY-MM-DD hh:mm:ss -> M D, Y hh:mm AM/PM
     *
     * @param value Date value
     */
    transform(value: string): string {
        if (value === '') {
            return '-';
        } else {
            const year = parseInt(value.split('-')[0], 10);
            const month = parseInt(value.split('-')[1], 10);
            const day = parseInt(value.split('-')[2], 10);
            const time = this.formatTime(value.split(' ')[1]);
            return this.months[month - 1] + ' ' + day + ', ' + year + ' ' + time;
        }
    }
}
