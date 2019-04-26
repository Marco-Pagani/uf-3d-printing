import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

@Component({
    selector: 'app-job-request-page',
    templateUrl: './detailed-info-page.html',
    styleUrls: ['detailed-info-page.component.css']
})

export class DetailedInfoPageComponent implements OnInit {
    @ViewChild('jobForm') myForm;

    statuses = [{
        value: 0,
        name: 'Pending'
    }, {
        value: 1,
        name: 'Processing'
    }, {
        value: 2,
        name: 'Pending Payment'
    }, {
        value: 3,
        name: 'Ready to Print'
    }, {
        value: 4,
        name: 'Printing'
    }, {
        value: 5,
        name: 'Complete'
    }, {
        value: 6,
        name: 'Cancelled'
    }];
    jobId;
    job;

    files;

    constructor(private endPointService: EndpointService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.jobId = this.activatedRoute.params['value']['id'];
        this.endPointService.getJob(this.jobId).subscribe(
            data => {
                this.job = data;
                this.endPointService.getFiles(this.jobId).subscribe(
                    files => {
                        this.files = files;
                    },
                    error => {
                        console.log(error);
                    }
                );
            },
            error => {
                console.log(error);
            }
        );
        console.log(this.jobId);
    }

    submitJob() {
        this.endPointService.updateJob(this.job);
    }

    onChangeEvent(event) {
        console.log(event);
    }

    updateJob() {
        console.log(this.job);
        this.endPointService.updateJob(this.job).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            });
    }

}
