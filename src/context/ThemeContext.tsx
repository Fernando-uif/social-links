import {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  Dispatch,
} from "react";

interface ContextProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ContextProps>({
  isDark: true,
  setIsDark: () => undefined,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
