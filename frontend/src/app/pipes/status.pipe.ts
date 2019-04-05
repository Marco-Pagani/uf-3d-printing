import { Pipe, PipeTransform } from '@angular/core';
/*
 * Status pipe
*/
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
    transform(value: number, opt: string): string {
        if (opt === 'p') {
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
        } else if (opt === 'l') {
            switch (value) {
                case 0:
                    return 'list-group-item-warning';
                case 1:
                    return 'list-group-item-warning';
                case 2:
                    return 'list-group-item-warning';
                case 3:
                    return 'list-group-item-success';
                case 4:
                    return '';
                case 5:
                    return 'list-group-item-success';
                case 6:
                    return 'list-group-item-danger';
            }
        } else {
            switch (value) {
                case 0:
                    return 'fa-ellipsis-h text-warning';
                case 1:
                    return 'fas fa-file-signature text-warning';
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
