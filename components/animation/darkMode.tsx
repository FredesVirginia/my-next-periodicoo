import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar renderizado SSR inconsistente
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Muestra el tema actual real: user o sistema
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
    >
      {currentTheme === "dark" ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}

