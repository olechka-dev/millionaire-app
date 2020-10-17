import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, PlayStatus, Question } from '../types/play.types';
import { QuestionsReducer } from './questions/reducers';
import { QuestionEffects } from './questions/effects';
import { StatusReducer } from './status/reducers';

export const selectQuestionsState = createFeatureSelector<Question[]>('questions');
export const selectStatusState = createFeatureSelector<PlayStatus>('status');

export const selectQuestionNum = createSelector(selectStatusState, (state) => state.curQuestionNumber);
export const selectSkippedNum = createSelector(selectStatusState, (state) => state.skippedLeft);

export const selectCurQuestion = createSelector(
    selectQuestionsState,
    selectQuestionNum,
    (questions, num: number): Question => questions[num]
);


export const reducers: ActionReducerMap<AppState> = {
    questions: QuestionsReducer,
    status: StatusReducer
};

export const effects = [
    QuestionEffects
];
