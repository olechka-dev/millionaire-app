import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

    lives = [1, 1, 1];

    constructor() {
    }

    ngOnInit(): void {
    }

}
