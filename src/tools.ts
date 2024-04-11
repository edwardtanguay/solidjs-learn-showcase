import { Todo } from "./types";

export const getNextHighestId = (todos: Todo[]): number => {
	let maxId = 0;
	todos.forEach((todo) => {
		if (todo.id > maxId) {
			maxId = todo.id;
		}
	});
	return maxId + 1;
};
