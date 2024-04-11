import type { Component } from "solid-js";
import { Example } from "./components/Example";
import { Ex001TodoApp } from "./examples/Ex001TodoApp";

const App: Component = () => {
	return (
		<>
			<h1 class="text-3xl mb-3">SolidJS Learn Showcase</h1>
			<Example title="Ex001TodoApp">
				<Ex001TodoApp />
			</Example>
		</>
	);
};

export default App;
