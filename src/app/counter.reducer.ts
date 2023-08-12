import { createReducer, on } from '@ngrx/store';
import {
  createSportCard,
  deleteSportCard,
  updatedSportCard,
} from './counter.actions';
import { SportCard } from './types';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

const defaultItem: SportCard = {
  firstName: 'John',
  lastName: 'Smith',
  playersNumber: 56,
  playersTeam: 'New York Giants',
  estimatedValue: 100,
  id: 'default id',
};

export interface DataState extends EntityState<SportCard> {}

export const dataAdapter = createEntityAdapter<SportCard>();

export const initialState: DataState = dataAdapter.getInitialState({
  ids: [defaultItem.id],
  entities: { [defaultItem.id]: defaultItem },
});

export const dataReducer = createReducer(
  initialState,
  on(createSportCard, (state, { data }) => dataAdapter.addOne(data, state)),
  on(deleteSportCard, (state, { id }) => dataAdapter.removeOne(id, state)),
  on(updatedSportCard, (state, { id, changes }) =>
    dataAdapter.updateOne({ id, changes }, state)
  )
);
