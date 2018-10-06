import { Task } from "../../shared/models/task.model";
import * as TaskActions from "../actions/task.action";

const initialState: Task = {
	taskname: "Wakeups",
	tasktime: "7:00"
}

export function reducer(state:Task[] = [initialState], action: TaskActions.Actions) {
	switch (action.type) {
		case TaskActions.ADD_TASK:
			return [...state,action.payload];
			break;
		case TaskActions.REMOVE_TASK:
			state.splice(action.payload,1);
			return state;
		default:
			return state;
			break;
	}
}