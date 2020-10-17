import { createAction, props } from '@ngrx/store';
import { UpdateStatus } from '../../types/play.types';

export enum StatusActions {
    UPDATE_STATUS = '[Status] Update',
    SET_TOTAL_NUM = '[Status] Set Total Question Number'
}

export const updateStatus = createAction(StatusActions.UPDATE_STATUS, props<{ payload: UpdateStatus }>());
export const setTotalNum = createAction(StatusActions.SET_TOTAL_NUM, props<{ payload: number }>());
