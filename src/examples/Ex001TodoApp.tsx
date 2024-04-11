import { createSignal } from "solid-js";

export const Ex001TodoApp = () => {
	const [todos, setTodos] = createSignal([]);
	return (
		<section>
			<input placeholder="enter todo"/>
		</section>
	);
};
