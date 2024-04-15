import { useContext } from "solid-js";
import AppContext from "./AppContext";

// Define the hook return type
type UseAppContextReturn = {
	appTitle: string;
	setAppTitle: (title: string) => void;
};

// Custom hook to access the context
const useAppContext = (): UseAppContextReturn => {
	// TODO: fix typescript errors here
	const [appTitle, setAppTitle] = useContext(AppContext);
	return { appTitle, setAppTitle };
};

export default useAppContext;
