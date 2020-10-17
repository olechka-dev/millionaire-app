import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnChanges {
    @Input() questionId: number;
    @Input() isAnswered: boolean;

    @Output() onTimeBreakpoint = new EventEmitter();

    secLeft = 20;
    interval;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.questionId && changes.questionId.currentValue !== changes.questionId.previousValue) {
            this.startCountdown();
        }

        if (changes.isAnswered && changes.isAnswered.currentValue !== changes.isAnswered.previousValue &&
            changes.isAnswered.currentValue === true) {
            clearInterval(this.interval);
        }
    }

    startCountdown() {
        this.secLeft = 20;
        const targetTime = (+new Date()) + (20 * 1000);
        let hasWarningSent = false;
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(() => {
            const curTime = +new Date();
            this.secLeft = Math.round((targetTime - curTime) / 1000);

            if (this.secLeft === 5 && !hasWarningSent) {
                this.onTimeBreakpoint.emit(5);
                hasWarningSent = true;
            }

            if (this.secLeft <= 0) {
                this.onTimeBreakpoint.emit(0);
                clearInterval(this.interval);
            }
        }, 1000);

    }

}
