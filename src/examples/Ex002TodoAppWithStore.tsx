import { For, Show, createSignal } from "solid-js";
import { BsTrash3Fill } from "solid-icons/bs";
import { Todo } from "../types";
import { getNextHighestId } from "../tools";
import { createStore } from "solid-js/store";

export const Ex002TodoAppWithStore = () => {
	const [store, setStore] = createStore({
		todos: [
			{ id: 1, title: "Learn SolidJS", completed: false },
			{ id: 2, title: "Build a Todo App", completed: true },
			{ id: 3, title: "Explore SolidJS features", completed: false },
		],
	});
	const [newTitle, setNewTitle] = createSignal("");

	const handleChangeTodo = (e: Event) => {
		const keyboardEvent = e as KeyboardEvent;
		setNewTitle((e.target as HTMLInputElement).value);
		if (e.target) {
			if (keyboardEvent.code === "Enter") {
				setStore("todos", (todos) => [
					...todos,
					{
						id: getNextHighestId(todos),
						title: newTitle(),
						completed: false,
					},
				]);
				setNewTitle("");
			}
		}
	};

	const handleDeleteItem = (todo: Todo) => {
		console.log("deltodo", todo);
		console.log("delid", todo.id);
		const _todos = store.todos.filter((m: Todo) => m.id !== todo.id);
		setStore("todos", _todos);
	};

	const handleToggleCompleted = (todo: Todo) => {
		setStore("todos", m => m.id === todo.id, "completed", (completed: boolean) => !completed);
	};

	return (
		<section>
			<p class="devNotes">uses createStore for todos</p>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					placeholder="enter todo"
					value={newTitle()}
					onKeyUp={(e) => handleChangeTodo(e)}
				/>
			</form>
			<Show when={store.todos.length > 0}>
				<h2 class="text-md mt-3 mb-1">
					{store.todos.reduce(
						(total: number, todo: Todo) =>
							(total += todo.completed ? 1 : 0),
						0
					)}{" "}
					of {store.todos.length} todos completed:
				</h2>
				<ul class="list-none">
					<For each={store.todos}>
						{(todo: Todo) => (
							<li class="flex gap-2">
								<input
									type="checkbox"
									id={`todoStore-${todo.id}`}
									checked={todo.completed}
									onInput={() => handleToggleCompleted(todo)}
								/>
								<label
									class="select-none cursor-pointer"
									for={`todoStore-${todo.id}`}
								>
									<span
										class={
											todo.completed ? "line-through" : ""
										}
									>
										{todo.title}
									</span>
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
