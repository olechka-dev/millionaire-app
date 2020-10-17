import { createAction, props } from '@ngrx/store';
import { Question } from '../../types/play.types';

export enum QuestionsActions {
    GET_QUESTIONS = '[Questions] Get',
    GET_QUESTIONS_SUCCESS = '[Questions] Get Success',
    GET_QUESTIONS_FAILED = '[Questions] Get Failed'
}

export const getQuestions = createAction(QuestionsActions.GET_QUESTIONS);
export const getQuestionsSuccess = createAction(QuestionsActions.GET_QUESTIONS_SUCCESS,
    props<{ payload: Question[] }>());
export const getQuestionsFailed = createAction(QuestionsActions.GET_QUESTIONS_FAILED);

