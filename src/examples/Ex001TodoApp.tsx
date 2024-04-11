import { For, Show, createSignal } from "solid-js";
import { BsTrash3Fill } from "solid-icons/bs";
import { Todo } from "../types";
import { getNextHighestId } from "../tools";

export const Ex001TodoApp = () => {
	const [todos, setTodos] = createSignal([
		{ id: 1, title: "Learn SolidJS", completed: false },
		{ id: 2, title: "Build a Todo App", completed: true },
		{ id: 3, title: "Explore SolidJS features", completed: false },
	]);
	const [newTitle, setNewTitle] = createSignal("nnn");

	const handleAddTodo = (e: Event) => {
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
				setNewTitle('');
			}
		}
	};

	const handleDeleteItem = (todo: Todo) => {
		const _todos = todos().filter((m) => m.id !== todo.id);
		setTodos(_todos);
	};

	return (
		<section>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					placeholder="enter todo"
					value={newTitle()}
					onKeyUp={(e) => handleAddTodo(e)}
				/>
			</form>
			<Show when={todos().length > 0}>
				<h2 class="text-md mt-3 mb-1">
					There are {todos().length} todos:
				</h2>
				<ul class="list-none">
					<For each={todos()}>
						{(todo) => (
							<li class="flex gap-2">
								<input type="checkbox" id={`todo-${todo.id}`} />
								<label
									class="select-none cursor-pointer"
									for={`todo-${todo.id}`}
								>
									{todo.title}
								</label>
								<button onclick={() => handleDeleteItem(todo)}>
									<BsTrash3Fill class="text-[.8rem] text-red-950 hover:text-red-900" />
								</button>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</section>
	);
};
