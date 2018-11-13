import { Action } from '@ngrx/store';
import { Habits } from '../../models/habit.model';


export const LOAD_HABITS = '[Habit] Load Habit';
export const LOAD_HABITS_FAIL = '[Terrain] Load Habit Fail';
export const LOAD_HABITS_SUCCESS = '[Terrain] Load Habit Success';


export class LoadHabits implements Action {
  readonly type = LOAD_HABITS;
}

export class LoadHabitsFail implements Action {
  readonly type = LOAD_HABITS_FAIL;
  constructor(public payload: any) {}
}

export class LoadHabitsSuccess implements Action {
  readonly type = LOAD_HABITS_SUCCESS;
  constructor(public payload: Habits[]) {}
}


export type TerrainsAction =
LoadHabits |
LoadHabitsFail |
LoadHabitsSuccess 