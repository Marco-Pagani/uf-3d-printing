import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

/**
 * Job List page
 *
 * TODO: Change payment date to last updated. Implement search functionality
 */
@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css']
})
export class JobListPageComponent implements OnInit {

    DEFAULT_SORT = 'status';

    tableData: Object;
    direction = 1;
    prevSort;

    constructor(private endPointService: EndpointService) { }

    ngOnInit() {
        // Load pending tab first
        this.loadPending();
    }

    /**
     * Loads the pending tab jobs
     */
    loadPending() {
        this.tableData = [];
        this.endPointService.getPendingJobs().subscribe(
            data => {
                this.tableData = data;
                this.resetSort();
                this.sortBy(this.DEFAULT_SORT, 'pickupLocation');
            },
            error => {
                console.log(error);
            }
        );
    }

    /**
     * Loads the Marston Library jobs
     */
    loadMarston() {
        this.tableData = [];
        this.endPointService.getMarstonJobs().subscribe(
            data => {
                this.tableData = data;
                this.resetSort();
                this.sortBy(this.DEFAULT_SORT);
            },
            error => {
                console.log(error);
            }
        );
    }

    /**
     * Loads the Health Science Center jobs
     */
    loadHealth() {
        this.tableData = [];
        this.endPointService.getHealthJobs().subscribe(
            data => {
                this.tableData = data;
                this.resetSort();
                this.sortBy(this.DEFAULT_SORT);
            },
            error => {
                console.log(error);
            }
        );
    }

    /**
     * Loads the Education Library jobs
     */
    loadEducation() {
        this.tableData = [];
        this.endPointService.getEducationJobs().subscribe(
            data => {
                this.tableData = data;
                this.resetSort();
                this.sortBy(this.DEFAULT_SORT);
            },
            error => {
                console.log(error);
            }
        );
    }

    /**
     * Resets sort memory
     */
    resetSort() {
        this.prevSort = '';
    }

    /**
     * Sorts the table data by given keys
     *
     * @param key Primary key
     * @param bkey Secondary key
     * @param ckey Tertiary key
     */
    sortBy(key, bkey?, ckey?) {
        this.direction = key === this.prevSort ? -this.direction : 1;
        this.prevSort = key;
        if (ckey) {
            this.tableData = Helper.sortBy(this.tableData, key, this.direction, bkey, ckey);
        } else if (bkey) {
            this.tableData = Helper.sortBy(this.tableData, key, this.direction, bkey, 'name');
        } else {
            this.tableData = Helper.sortBy(this.tableData, key, this.direction, 'status', 'name');
        }
    }

    /**
     * Returns all keys of a given object
     *
     * @param obj Object
     */
    keys(obj) {
        return Object.keys(obj);
    }
}
