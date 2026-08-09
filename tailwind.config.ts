import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F0E8",
        "ivory-dim": "#EAE3D5",
        ink: "#15130F",
        "ink-soft": "#221F19",
        taupe: "#A99C89",
        "taupe-light": "#CFC4B0",
        bronze: "#AD8455",
        "bronze-light": "#D9B98C",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        atelier: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        content: "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
