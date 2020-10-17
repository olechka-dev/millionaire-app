import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCurQuestion, selectQuestionNum, selectSkippedNum } from '../../core/store';
import { Observable } from 'rxjs';
import { AppState, Question } from '../../core/types/play.types';
import { filter, tap } from 'rxjs/operators';
import { updateStatus } from '../../core/store/status/actions';

type AnswerStatus = 'NOT_ANSWERED' | 'CORRECT' | 'WRONG' | 'TIME_OUT';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    curQuestNum$: Observable<number>;
    skippedLeft$: Observable<number>;
    selectedAnswer: string;
    correctAnswer: string;
    showSkip = false;
    questionData$: Observable<Question>;
    curStatus: AnswerStatus = 'NOT_ANSWERED';

    constructor(private store: Store<AppState>) {

    }

    ngOnInit(): void {
        this.curQuestNum$ = this.store.pipe(
            select(selectQuestionNum)
        );
        this.skippedLeft$ = this.store.pipe(
            select(selectSkippedNum)
        );
        this.questionData$ = this.store.pipe(
            select(selectCurQuestion),
            filter((question) => !!question),
            tap((question) => {
                this.correctAnswer = question.correct_answer;
                this.curStatus = 'NOT_ANSWERED';
                this.selectedAnswer = '';
                this.showSkip = false;
            })
        );
    }

    selectAnswer(answer) {
        this.selectedAnswer = answer;
    }

    submitAnswer() {
        let payload = {};
        if (!!this.selectedAnswer && this.selectedAnswer === this.correctAnswer) {
            this.curStatus = 'CORRECT';
            payload = { isCorrect: true };

        } else {
            this.curStatus = 'WRONG';
            payload = { isCorrect: false };

        }
        setTimeout(() => {
            this.store.dispatch(updateStatus({ payload }));
        }, 3000);
    }

    skipQuestion() {
        this.store.dispatch(updateStatus({ payload: { hasSkipped: true } }));
    }

    onTimeUpdate(timeLeft) {
        if (timeLeft === 5) {
            this.showSkip = true;
        }
        if (timeLeft === 0) {
            this.curStatus = 'TIME_OUT';
            setTimeout(() => {
                this.store.dispatch(updateStatus({ payload: { isCorrect: false } }));
            }, 3000);

        }
    }

}
