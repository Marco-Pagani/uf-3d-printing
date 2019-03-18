import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

/**
 * Job List page
 */
@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css']
})
export class JobListPageComponent implements OnInit {

    DEFAULT_SORT = 'status';

    es;
    tableData = [];
    direction = 1;
    prevSort;

    constructor(endPointService: EndpointService) { this.es = endPointService; }

    ngOnInit() {
        // Load pending tab first
        this.loadPending();
    }

    /**
     * Loads the pending tab jobs
     */
    loadPending() {
        this.tableData = this.es.getPendingJobs();
        this.resetSort();
        this.sortBy(this.DEFAULT_SORT, 'pickupLocation');
    }

    /**
     * Loads the Marston Library jobs
     */
    loadMarston() {
        this.tableData = this.es.getMarstonJobs();
        this.resetSort();
        this.sortBy(this.DEFAULT_SORT);
    }

    /**
     * Loads the Health Science Center jobs
     */
    loadHealth() {
        this.tableData = this.es.getHealthJobs();
        this.resetSort();
        this.sortBy(this.DEFAULT_SORT);
    }

    /**
     * Loads the Education Library jobs
     */
    loadEducation() {
        this.tableData = this.es.getEducationJobs();
        this.resetSort();
        this.sortBy(this.DEFAULT_SORT);
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
