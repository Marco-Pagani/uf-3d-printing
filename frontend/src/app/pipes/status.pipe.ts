import { Pipe, PipeTransform } from '@angular/core';
/*
 * Status pipe
*/
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
    transform(value: number, printable: boolean): string {
        if (printable) {
            switch (value) {
                case 0:
                    return 'Pending';
                case 1:
                    return 'Processing';
                case 2:
                    return 'Pending Payment';
                case 3:
                    return 'Ready to Print';
                case 4:
                    return 'Printing';
                case 5:
                    return 'Complete';
                case 6:
                    return 'Cancelled';
            }
        } else {
            switch (value) {
                case 0:
                    return 'fa-ellipsis-h text-warning';
                case 1:
                    return 'fas fa-file-signature';
                case 2:
                    return 'fa-dollar-sign text-warning';
                case 3:
                    return 'fa-dollar-sign text-success';
                case 4:
                    return 'fas fa-print';
                case 5:
                    return 'fa-check-circle text-success';
                case 6:
                    return 'fa-times text-danger';
            }
        }
    }
}
