import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};