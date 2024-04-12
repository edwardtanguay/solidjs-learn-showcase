import type { Component } from "solid-js";
import { Example } from "./components/Example";
import { Ex001TodoApp } from "./examples/Ex001TodoApp";
import { Ex002TodoAppWithStore } from "./examples/Ex002TodoAppWithStore";
import { Ex003CounterWithContext } from "./examples/Ex003CounterWithContext";

const App: Component = () => {
	return (
		<>
			<h1 class="text-3xl mb-3">SolidJS Learn Showcase</h1>
			<main class="flex gap-5">
				<Example title="Ex001TodoApp">
					<Ex001TodoApp />
				</Example>
				<Example title="Ex002TodoAppWithStore">
					<Ex002TodoAppWithStore />
				</Example>
				<Example title="Ex003CounterWithContext">
					<Ex003CounterWithContext/>
				</Example>
			</main>
		</>
	);
};

export default App;
