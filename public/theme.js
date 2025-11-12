// Theme initialization script - runs before page render to prevent flash
(function () {
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const theme = getThemePreference();
  setTheme(theme);

  // Listen for storage changes (for multi-tab sync)
  window.addEventListener("storage", (e) => {
    if (e.key === "theme") {
      setTheme(e.newValue || "light");
    }
  });
})();

