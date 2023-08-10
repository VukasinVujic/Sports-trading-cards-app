import { createAction, props } from '@ngrx/store';
import { SportCard } from './types';

export const sendDataToStore = createAction(
  '[Data] Send Data to Store',
  props<{ data: SportCard }>()
);
