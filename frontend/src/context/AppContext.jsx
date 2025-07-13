import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// Allows any component to access shared data (doctors list)=>AppContext
export const AppContext = createContext();
const AppContextProvider = ({children}) => {
    const currencySymbol = "$";
    const value = { doctors,currencySymbol};//Makes doctors available via useContext(AppContext) in other components.
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;
