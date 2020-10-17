import { Component, Input, OnInit } from '@angular/core';
import { PlayStatus } from '../../core/types/play.types';
import { MAX_LIVES } from '../../core/store/status/reducers';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

    @Input() status: PlayStatus;

    lives = [];

    constructor() {
    }

    ngOnInit(): void {
        this.lives = new Array(MAX_LIVES).fill(true);
    }

}
