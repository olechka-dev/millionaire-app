import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() curNumber: number;
    @Input() totalCount: number;
    statusDots = [];

    constructor() {
    }

    ngOnInit(): void {
        this.statusDots = new Array(this.totalCount).fill(true);
    }

}
