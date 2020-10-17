import { Action, createReducer, on } from '@ngrx/store';
import { PlayStatus } from '../../types/play.types';
import { setTotalNum, updateStatus } from './actions';

export const MAX_LIVES = 3;
export const MAX_SKIPS = 3;


const initStatusState: PlayStatus = {
    lives: MAX_LIVES,
    curQuestionNumber: 0,
    correctCount: 0,
    skippedLeft: MAX_SKIPS,
    totalCount: 0
};

const _statusReducer = createReducer(initStatusState,
    on(updateStatus, (state: PlayStatus, {payload}) => {
        const newState: PlayStatus = { ...state};
        newState.curQuestionNumber++;

        if (payload.hasSkipped) {
            newState.skippedLeft--;
            return { ...newState};
        }
        if (payload.isCorrect) {
            newState.correctCount++;
            return { ...newState};
        }
        newState.lives--;
        return {...newState};
    }),
    on(setTotalNum, (state: PlayStatus, {payload}) => {
        return {...state, totalCount: payload};
    }),
);

export function StatusReducer(state: PlayStatus, action: Action) {
    return _statusReducer(state, action);
}
