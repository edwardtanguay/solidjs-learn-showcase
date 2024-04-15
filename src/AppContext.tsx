import { createContext } from "solid-js";

// Define the context type
type AppContextType = [string, (title: string) => void];

// Create a context
const AppContext = createContext<AppContextType>();

export default AppContext;
