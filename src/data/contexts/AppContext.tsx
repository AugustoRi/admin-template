import { createContext, ReactNode, useState } from "react";

type Theme = "light" | "dark";

interface AppContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({children} : AppProviderProps) {

  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme(){
    return setTheme(theme === "light" ? "dark" : "light");
  }

  const AppContextValue = {
    theme: theme, 
    toggleTheme: toggleTheme,
  }
  
  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}