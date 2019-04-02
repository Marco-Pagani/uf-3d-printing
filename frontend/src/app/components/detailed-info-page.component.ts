import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

@Component({
    selector: 'app-job-request-page',
    templateUrl: './detailed-info-page.html'
})

export class DetailedInfoPageComponent implements OnInit {

    constructor(private endPointService: EndpointService) { }

    ngOnInit() {

    }

}
