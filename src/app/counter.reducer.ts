import { createReducer, on } from '@ngrx/store';
import { sendDataToStore } from './counter.actions';
import { SportCard } from './types';

export const initialState: SportCard[] = [
  {
    firstName: 'John',
    lastName: 'Smith',
    playersNumber: 56,
    playersTeam: 'New York Giants',
    estimatedValue: 100,
  },
];

export const dataReducer = createReducer(
  initialState,
  on(sendDataToStore, (state, { data }) => [...state, data])
);
