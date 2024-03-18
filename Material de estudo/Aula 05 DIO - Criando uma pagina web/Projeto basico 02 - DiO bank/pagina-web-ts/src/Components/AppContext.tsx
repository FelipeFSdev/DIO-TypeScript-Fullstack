import { createContext } from "react";

interface IUser {
    name: string
};

export const AppContext = createContext({} as IUser);
export const AppContextProvider = ({ children }: any) => {
    const name = "jameson";
    return (
        <AppContext.Provider value={{ name }}>
            {children}
        </AppContext.Provider>
    );
};
