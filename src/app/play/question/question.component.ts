import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCurQuestion, selectQuestionNum, selectSkippedNum, selectStatusState } from '../../core/store';
import { Observable } from 'rxjs';
import { AppState, Question } from '../../core/types/play.types';
import { filter, map, take, takeUntil, tap } from 'rxjs/operators';
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
    isGameOver$: Observable<boolean>;

    selectedAnswer: string;
    correctAnswer: string;
    showSkip = false;
    questionData$: Observable<Question>;
    curStatus: AnswerStatus = 'NOT_ANSWERED';

    constructor(private store: Store<AppState>) {

    }

    ngOnInit(): void {
        this.isGameOver$ = this.store.pipe(
            select(selectStatusState),
            map((status) => !!(status.lives === 0 || (status.totalCount && status.curQuestionNumber === status.totalCount))),
            filter(isOver => isOver),
            take(1)
        );
        this.curQuestNum$ = this.store.pipe(
            select(selectQuestionNum),
            takeUntil(this.isGameOver$)
        );
        this.skippedLeft$ = this.store.pipe(
            select(selectSkippedNum),
            takeUntil(this.isGameOver$)
        );
        this.questionData$ = this.store.pipe(
            select(selectCurQuestion),
            takeUntil(this.isGameOver$),
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
