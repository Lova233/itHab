import { Habits } from '../../models/habit.model'
import * as fromHabit from '../actions/action'

export interface HabitState {
  entities : {[habit_name : string ]:Habits}
  loaded: boolean;
  loading:boolean;
}

export const defaultState: HabitState = {
  entities: {},
  loaded: false,
  loading: false,
}

export function reducer(
  state = defaultState,
  action: fromHabit.TerrainsAction ): HabitState {
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
              loading: true
          };
      }
      }}