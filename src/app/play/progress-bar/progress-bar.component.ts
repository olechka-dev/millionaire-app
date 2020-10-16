import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    progressArr = [
        true, true, false, false, false, false, false, false, false, false, false, false
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
