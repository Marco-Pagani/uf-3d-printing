import { Component, OnInit } from '@angular/core';

import { EndpointService } from '../services/endpoint.service';
import { Helper } from '../helpers/helper';

@Component({
    selector: 'app-job-request-page',
    templateUrl: './job-request-page.component.html',
    styleUrls: ['./job-request-page.component.css']
})

export class JobRequestPageComponent implements OnInit {

    files = [];
    quantity;
    color1;
    color2;
    color3;
    details;
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    fadd = false;
    filename = '';

    fname;
    lname;
    email;
    pnumber;
    affiliation;
    preferredLoc;


    constructor(private endpointService: EndpointService) { }

    ngOnInit() {
    }

    addFile() {
        console.log(this.filename);
        console.log(this.quantity);
        console.log(this.color1);
        console.log(this.color2);
        console.log(this.color3);
        console.log(this.details);
        if (!this.quantity || !this.color1 || !this.color2 || !this.color3) {
            // Input not valid
            this.fadd = true;
        } else {
            // Add to files
            this.fadd = false;
            this.files.push({
                name: this.filename,
                quantity: this.quantity,
                color: [this.color1, this.color2, this.color3],
                extra: this.details,
                img: 'https://cdn.thingiverse.com/renders/79/e2/33/43/8d/da5068580629d64c9b3a66a875e6bf60_preview_featured.jpg',
                dimensions: {
                    x: 20,
                    y: 20,
                    z: 20
                }
            });
            this.quantity = undefined;
            this.color1 = undefined;
            this.color2 = undefined;
            this.color3 = undefined;
            this.details = undefined;
            this.fname = undefined;
        }
    }

    submitRequest() {
        // TODO
    }

    onChange(event) {
        const files = event.srcElement.files;
        this.fname = event.srcElement.files[0].name;
        console.log(files);
    }

}
