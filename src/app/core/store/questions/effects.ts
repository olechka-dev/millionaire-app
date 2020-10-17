import { ApiService } from '../../services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { getQuestionsFailed, getQuestionsSuccess, QuestionsActions } from './actions';
import { setTotalNum } from '../status/actions';


@Injectable()
export class QuestionEffects {
    getQuestions$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.GET_QUESTIONS),
        switchMap((action: any) =>
            this.api.getQuestions()
                .pipe(
                    switchMap((res) => {
                        return [
                            getQuestionsSuccess({ payload: res }),
                            setTotalNum({ payload: res.length })
                        ];
                    }),
                    catchError(() => {
                        return [getQuestionsFailed()];
                    })
                )
        )
    ));

    constructor(private api: ApiService,
                private actions$: Actions,
    ) {
    }
}
