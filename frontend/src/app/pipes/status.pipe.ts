import { Pipe, PipeTransform } from '@angular/core';
/*
 * Status pipe
*/
@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 0:
                return 'fa-ellipsis-h text-warning';
            case 1:
                return 'fa-dollar-sign text-warning';
            case 2:
                return 'fa-dollar-sign text-success';
            case 3:
                return 'fa-check-circle text-success';
            case 4:
                return 'fa-times text-danger';
        }
    }
}
