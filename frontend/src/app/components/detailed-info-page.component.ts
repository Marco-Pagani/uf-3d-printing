import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

@Component({
    selector: 'app-job-request-page',
    templateUrl: './detailed-info-page.html',
    styleUrls: ['detailed-info-page.component.css']
})

export class DetailedInfoPageComponent implements OnInit {

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

}
