import { For, Show, createSignal } from "solid-js";

export const Ex001TodoApp = () => {
	const ESCAPE_KEY = 27;
	const ENTER_KEY = 13;

	type Todo = {
		id: number;
		title: string;
		completed: boolean;
	};

	function getNextHighestId(todos: Todo[]) {
		let maxId = 0;
		todos.forEach((todo) => {
			if (todo.id > maxId) {
				maxId = todo.id;
			}
		});
		return maxId + 1;
	}

	const [todos, setTodos] = createSignal([
		{ id: 1, title: "Learn SolidJS", completed: false },
		{ id: 2, title: "Build a Todo App", completed: true },
		{ id: 3, title: "Explore SolidJS features", completed: false },
	]);

	const addTodo = (e: Event) => {
		e.preventDefault();
		const keyboardEvent = e as KeyboardEvent;
		if (e.target) {
			const title = (e.target as HTMLInputElement).value;
			if (keyboardEvent.code === "Enter") {
				setTodos((todos) => [
					...todos,
					{
						id: getNextHighestId(todos),
						title,
						completed: false,
					},
				]);
			}
		}
	};

	return (
		<section>
			<form onSubmit={(e) => e.preventDefault()}>
				<input placeholder="enter todo" onKeyUp={(e) => addTodo(e)} />
			</form>
			<Show when={todos().length > 0}>
				<h2 class="text-md mt-3">There are {todos().length} todos:</h2>
				<ul class="list-disc ml-6">
					<For each={todos()}>
						{(todo) => (
							<li>
								{todo.title} ({todo.id})
							</li>
						)}
					</For>
				</ul>
			</Show>
		</section>
	);
};
