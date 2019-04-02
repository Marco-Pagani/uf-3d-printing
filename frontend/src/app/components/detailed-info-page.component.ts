import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

@Component({
    selector: 'app-job-request-page',
    templateUrl: './detailed-info-page.html'
})

export class DetailedInfoPageComponent implements OnInit {

    jobId;

    constructor(private endPointService: EndpointService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.jobId = this.activatedRoute.params['value']['id'];

        console.log(this.jobId);
    }

}
