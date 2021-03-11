import { useContext } from "react";
import { ThemeContext } from "../contexts/ToggleTheme";

function useToggleTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export default useToggleTheme;