import { Task } from "./models/task.model";

export interface AppState {
	readonly task: Task[];
}