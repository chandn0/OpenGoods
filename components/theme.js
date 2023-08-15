import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      Theme: {theme}
      <button onClick={() => setTheme("light")}>Light </button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ThemeChanger;
