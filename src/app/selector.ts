import { createSelector } from '@ngrx/store';
import { dataAdapter } from './counter.reducer';

const { selectAll } = dataAdapter.getSelectors();

export const selectItemState = (state: any) => state.data;

export const selectAllItems = createSelector(selectItemState, selectAll);
