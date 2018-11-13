import { Habit } from '../../models/habit.model'
import * as fromHabit from '../actions/action'

export interface AppState {
  entities : {[habit_name : string ]:Habit}
  loaded: boolean;
  loading:boolean;
}

export const defaultState: AppState = {
  entities: {},
  loaded: false,
  loading: false,
}

export function reducer(
  state = defaultState,
  action: fromHabit.HabitsAction ): AppState {
  switch (action.type) {
      case fromHabit.LOAD_HABITS: {
          return {
              ...state,
              loading: true
          };
      }
      case fromHabit.LOAD_HABITS_SUCCESS: {
          return {
              ...state,
              entities:{},
              loading: true
          };
      }
      }}