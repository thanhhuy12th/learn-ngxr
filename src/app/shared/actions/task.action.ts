import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";

export class addTask implements Action {
	readonly type = ADD_TASK;

	constructor(public payload:Task) {};
}

export class removeTask implements Action {

	readonly type = REMOVE_TASK;

	constructor(public payload:number) {};

}

export type Actions = addTask | removeTask;