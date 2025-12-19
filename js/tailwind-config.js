tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#9333ee",
                secondary: "#d8b4fe",
                "background-light": "#f7f6f8",
                "background-dark": "#191022",
                "surface-light": "#ffffff",
                "surface-dark": "#1e102e"
            },
            fontFamily: {
                display: "Plus Jakarta Sans",
                body: ["Lato", "sans-serif"],
                script: ["Great Vibes", "cursive"]
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
            },
            borderRadius: {
                DEFAULT: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px"
            }
        }
    }
};