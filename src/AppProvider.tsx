import { createSignal } from "solid-js";
import AppContext from "./AppContext";
import * as Solid from 'solid-js';

// Define a Provider component
const AppProvider: any = (props: any) => {
	// Initialize the shared variable
	const [appTitle, setAppTitle] = createSignal("My SolidJS App");

	return (
		<AppContext.Provider value={[appTitle(), setAppTitle]}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvider;
