document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Load the stored theme
    if (currentTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        const theme = document.body.getAttribute("data-theme");
        
        if (theme === "dark") {
            document.body.removeAttribute("data-theme");
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }
    });
});

