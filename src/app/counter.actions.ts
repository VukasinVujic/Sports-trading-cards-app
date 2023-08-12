import { createAction, props } from '@ngrx/store';
import { SportCard } from './types';

export const createSportCard = createAction(
  '[Data] Send Data to Store',
  props<{ data: SportCard }>()
);

export const deleteSportCard = createAction(
  '[Data] Delete Sport Card',
  props<{ id: string }>()
);

export const updatedSportCard = createAction(
  '[Data] Update Sport Card',
  props<{ id: string; changes: SportCard }>()
);
