import { Action, createReducer, on } from '@ngrx/store';
import { Question } from '../../types/play.types';
import { getQuestionsSuccess } from './actions';


const initQuestionsState: Question[] = [];

const _questionReducer = createReducer(initQuestionsState,
    on(getQuestionsSuccess, (state: Question[], {payload}) => ([...payload]))
);

export function QuestionsReducer(state: Question[], action: Action) {
    return _questionReducer(state, action);
}
